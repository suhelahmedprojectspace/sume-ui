'use client';

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import cn from '../../lib/cn';

export type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  options?: EmblaOptionsType;
  showControls?: boolean;
  showDots?: boolean;
  autoplay?: boolean | {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
  };
  arrows?: boolean | {
    size?: number;
    className?: string;
    iconPrev?: React.ReactNode;
    iconNext?: React.ReactNode;
  };
  dots?: boolean | {
    size?: number;
    className?: string;
    activeClass?: string;
    inactiveClass?: string;
    position?: "bottom" | "left" | "right";
  };
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      className,
      options,
      showControls = true,
      showDots = true,
      autoplay = false,
      arrows = true,
      dots = true,
    },
    ref
  ) => {
    const isVertical = options?.axis === 'y';
    const autoplayConfig = typeof autoplay === "boolean" 
      ? { delay: 4000 } 
      : autoplay;
      
    const autoplayPlugin = React.useRef(
      autoplay ? Autoplay(autoplayConfig) : undefined
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
      options, 
      autoplay ? [autoplayPlugin.current!] : []
    );
    
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();
    const scrollTo = (index: number) => emblaApi?.scrollTo(index);

    React.useEffect(() => {
      if (!emblaApi) return;

      setScrollSnaps(emblaApi.scrollSnapList());
      
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        document.dispatchEvent(new CustomEvent('carousel:slideChange', {
          detail: { index: emblaApi.selectedScrollSnap() }
        }));
      };

      emblaApi.on("select", onSelect);
      onSelect();

      return () => {
        emblaApi.off("select", onSelect);
      };
    }, [emblaApi]);

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!emblaApi) return;
        if (isVertical) {
          if (e.key === "ArrowUp") scrollPrev();
          if (e.key === "ArrowDown") scrollNext();
        } else {
          if (e.key === "ArrowLeft") scrollPrev();
          if (e.key === "ArrowRight") scrollNext();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [emblaApi, isVertical]);

    const renderArrow = (direction: 'prev' | 'next') => {
      if (!arrows) return null;
      
      const arrowConfig = typeof arrows === "object" ? arrows : {};
      const { 
        size = 24, 
        className = "bg-background/80 hover:bg-background",
        iconPrev = isVertical ? <ArrowUp size={size} /> : <ArrowLeft size={size} />,
        iconNext = isVertical ? <ArrowDown size={size} /> : <ArrowRight size={size} />
      } = arrowConfig;

      const positionClasses = isVertical 
        ? direction === 'prev' 
          ? "top-4 left-1/2 -translate-x-1/2" 
          : "bottom-4 left-1/2 -translate-x-1/2"
        : direction === 'prev' 
          ? "left-4 top-1/2 -translate-y-1/2" 
          : "right-4 top-1/2 -translate-y-1/2";

      return (
        <button
          onClick={direction === 'prev' ? scrollPrev : scrollNext}
          className={cn(
            "absolute z-10 rounded-full p-2 shadow-lg transition-all",
            "opacity-0 group-hover/carousel:opacity-100",
            "focus:opacity-100 focus:outline-none focus:ring-2 ring-primary",
            positionClasses,
            className
          )}
          aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
        >
          {direction === 'prev' ? iconPrev : iconNext}
        </button>
      );
    };

    const renderDot = (index: number) => {
      if (!dots) return null;
      
      const dotConfig = typeof dots === "object" ? dots : {};
      const {
        size = 12,
        className = "bg-foreground/30 hover:bg-foreground/50",
        activeClass = "bg-blue-600 scale-125",
        inactiveClass = "bg-gray-300 scale-125"
      } = dotConfig;

      const isActive = selectedIndex === index;

      return (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          style={{ width: size, height: size }}
          className={cn(
            "mx-1 rounded-full transition-all duration-300",
            isActive ? activeClass : inactiveClass || className,
            "focus:outline-none focus:ring-2 ring-primary"
          )}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={isActive}
        />
      );
    };

    const getDotsPosition = () => {
      if (typeof dots === "object" && dots.position) {
        return dots.position;
      }
      return isVertical ? "right" : "bottom";
    };

    const dotsPosition = getDotsPosition();
    const dotsPositionClasses = {
      bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-4 flex-row",
      left: "left-4 top-1/2 -translate-y-1/2 flex-col",
      right: "right-4 top-1/2 -translate-y-1/2 flex-col",
    };

    return (
      <div 
        ref={ref}
        className={cn(
          "group/carousel relative w-full overflow-hidden", 
          isVertical?"h-[400px] max-h-[80vh]":"",
          className,
        )}
        role="region"
        aria-roledescription="carousel"
      >
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className={cn(
            isVertical?"flex flex-col gap-4 h-full min-h-0":"flex flex-row gap-4"
          )}>
            {React.Children.map(children, (child, index) => (
              <div 
                className={cn(
                  "relative flex-shrink-0",
                  isVertical ? "h-full w-full" : "w-full h-full"
                )}
                key={index}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <>
            {renderArrow('prev')}
            {renderArrow('next')}
          </>
        )}
         
        {showDots && scrollSnaps.length > 1 && (
          <div className={cn(
            "absolute flex gap-2",
            dotsPositionClasses[dotsPosition]
          )}>
            {scrollSnaps.map((_, index) => renderDot(index))}
          </div>
        )}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

type CarouselItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, className, as: Component = "div" }, ref) => {
    return (
      <Component 
        ref={ref}
        className={cn("h-full w-full min-h-0", className)}
        role="group"
        aria-roledescription="slide"
        aria-label="Carousel Item"
      >
        {children}
      </Component>
    );
  }
);
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselItem };