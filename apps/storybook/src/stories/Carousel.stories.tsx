import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState, useEffect } from 'react';
import { 

  ChevronUp,
  ChevronDown,
  Play,
  Pause,
  Star,
  ShoppingCart,
  CheckCircle,
 
} from 'lucide-react';

import { Carousel,CarouselItem } from '@sume/ui/components/Carousel';
type CarouselProps = React.ComponentProps<typeof Carousel>;
const meta: Meta<CarouselProps> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Professional, accessible carousel component built with Embla Carousel for smooth animations and robust functionality.**

## 🎯 When to Use Carousel

### ✅ Perfect Use Cases
- **Image Galleries**: Product photos, portfolio showcases
- **Content Sliders**: Featured articles, blog posts
- **Product Showcases**: E-commerce product displays
- **Testimonials**: Customer reviews, user feedback

### ❌ Avoid Using When
- Content is critical for SEO (hidden slides aren't indexed well)
- All content should be immediately visible
- Users need to compare multiple items simultaneously

## ✨ Key Features

- **Smooth Animations**: Hardware-accelerated transitions
- **Touch/Swipe Support**: Native touch gestures on mobile
- **Keyboard Navigation**: Full keyboard accessibility
- **Auto-play**: Configurable automatic slide progression
- **Responsive Design**: Adapts to any screen size
- **Accessibility**: WCAG 2.1 AA compliant

## 📚 Basic Implementation

\`\`\`tsx
import { Carousel, CarouselItem } from '@astra/ui/components/Carousel';

function BasicCarousel() {
  return (
    <Carousel className="w-full max-w-4xl">
      {images.map((image, index) => (
        <CarouselItem key={index}>
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
}
\`\`\`

## 🎛️ Advanced Configuration

\`\`\`tsx
function AdvancedCarousel() {
  return (
    <Carousel
      options={{ 
        loop: true,
        align: 'start',
        slidesToScroll: 1
      }}
      arrows={{
        size: 24,
        className: "bg-white shadow-lg",
        iconPrev: <ChevronLeft size={24} />,
        iconNext: <ChevronRight size={24} />
      }}
      dots={{
        position: "bottom",
        activeClass: "bg-blue-600",
        inactiveClass: "bg-gray-300"
      }}
      autoplay={{ 
        delay: 5000,
        stopOnInteraction: true 
      }}
    >
      {slides}
    </Carousel>
  );
}
\`\`\`

## ♿ Accessibility Features

- Full keyboard navigation (arrow keys, Tab, Enter, Space)
- Screen reader announcements for slide changes
- Proper ARIA roles and labels
- Touch targets ≥44px for mobile accessibility
- High contrast focus indicators
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'Carousel content - typically CarouselItem components',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the carousel container',
    },
    options: {
      control: 'object',
      description: 'Embla Carousel options for advanced configuration',
    },
    showControls: {
      control: 'boolean',
      description: 'Show/hide navigation arrow controls',
      table: { defaultValue: { summary: 'true' } },
    },
    showDots: {
      control: 'boolean',
      description: 'Show/hide dot navigation indicators',
      table: { defaultValue: { summary: 'true' } },
    },
    autoplay: {
      control: 'object',
      description: 'Auto-play configuration',
    },
    arrows: {
      control: 'object',
      description: 'Arrow navigation configuration',
    },
    dots: {
      control: 'object',
      description: 'Dot indicator configuration',
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for demos
const sampleImages = [
  {
    src: 'https://picsum.photos/800/400?random=1',
    alt: 'Beautiful landscape with mountains',
    title: 'Mountain Serenity'
  },
  {
    src: 'https://picsum.photos/800/400?random=2',
    alt: 'Ocean waves at sunset',
    title: 'Ocean Sunset'
  },
  {
    src: 'https://picsum.photos/800/400?random=3',
    alt: 'Forest path with sunlight',
    title: 'Forest Path'
  },
  {
    src: 'https://picsum.photos/800/400?random=4',
    alt: 'Desert dunes under starry sky',
    title: 'Desert Stars'
  }
];

const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$299',
    image: 'https://picsum.photos/300/300?random=10',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$399',
    image: 'https://picsum.photos/300/300?random=11',
    rating: 4.6
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: '$89',
    image: 'https://picsum.photos/300/300?random=12',
    rating: 4.9
  },
  {
    id: 4,
    name: 'USB-C Hub',
    price: '$149',
    image: 'https://picsum.photos/300/300?random=13',
    rating: 4.7
  }
];

const sampleTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: 'https://picsum.photos/60/60?random=20',
    content: 'This carousel component has transformed our product showcases. The smooth animations and accessibility features are exactly what we needed.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer',
    company: 'StartupXYZ',
    avatar: 'https://picsum.photos/60/60?random=21',
    content: 'Integration was seamless and the TypeScript support is excellent. Our team loves the flexibility and performance.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'DesignHub',
    avatar: 'https://picsum.photos/60/60?random=22',
    content: 'The accessibility features are outstanding. Finally, a carousel that works perfectly with screen readers.',
    rating: 5
  }
];

// =================== STORY: BASIC IMPLEMENTATION ===================
export const BasicImplementation: Story = {
  name: '🚀 Basic Implementation',
  parameters: {
    docs: {
      description: {
        story: `
### Quick Start Example

Simple image carousel with navigation controls and responsive design.

\`\`\`tsx
<Carousel className="w-full max-w-4xl">
  {images.map((image, index) => (
    <CarouselItem key={index}>
      <img 
        src={image.src} 
        alt={image.alt}
        className="w-full h-[400px] object-cover rounded-lg"
      />
    </CarouselItem>
  ))}
</Carousel>
\`\`\`

**Features:**
- Smooth slide transitions
- Touch/swipe support
- Keyboard navigation
- Responsive design
        `,
      },
    },
  },
  args: {
    className: 'w-full max-w-4xl',
    showControls: true,
    showDots: true,
    autoplay: false,
  },
  render: (args:CarouselProps) => (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Basic Image Carousel</h2>
        <p className="text-gray-600">Simple, elegant image gallery with navigation controls</p>
      </div>
      
      <Carousel {...args}>
        {sampleImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                <h3 className="font-semibold">{image.title}</h3>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Try These Interactions:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Click the arrow buttons to navigate</li>
          <li>• Click the dots below to jump to specific slides</li>
          <li>• Use left/right arrow keys for keyboard navigation</li>
          <li>• Swipe left/right on touch devices</li>
        </ul>
      </div>
    </div>
  ),
};

// =================== STORY: AUTOPLAY FEATURES ===================
export const AutoplayFeatures: Story = {
  name: '⏯️ Auto-play Features',
  parameters: {
    docs: {
      description: {
        story: `
### Auto-play Configuration

Automatic slide progression with customizable timing and controls.

\`\`\`tsx
<Carousel
  autoplay={{
    delay: 4000,              // 4 seconds between slides
    stopOnInteraction: true,  // Stop when user interacts
    stopOnMouseEnter: true    // Pause on hover
  }}
  options={{ loop: true }}
>
  {slides}
</Carousel>
\`\`\`

**Features:**
- Customizable delay between slides
- Pause on user interaction
- Pause on mouse hover
- Play/pause controls
        `,
      },
    },
  },
  render: () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const handleSlideChange = (e: any) => {
        setCurrentSlide(e.detail.index);
      };

      document.addEventListener('carousel:slideChange', handleSlideChange);
      return () => document.removeEventListener('carousel:slideChange', handleSlideChange);
    }, []);

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Auto-play Demo</h1>
          <p className="text-gray-600">
            Automatic slide progression with customizable timing controls
          </p>
        </div>

        {/* Controls */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
            <div className="text-sm text-gray-600">
              Slide {currentSlide + 1} of {sampleImages.length}
            </div>
          </div>
        </div>
        
        <Carousel 
          className="w-full"
          options={{ loop: true }}
          autoplay={isPlaying ? { 
            delay: 4000, 
            stopOnMouseEnter: true 
          } : false}
        >
          {sampleImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-lg opacity-90">Slide {index + 1} of {sampleImages.length}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    );
  },
};

// =================== STORY: PRODUCT SHOWCASE ===================
export const ProductShowcase: Story = {
  name: '🛍️ Product Showcase',
  parameters: {
    docs: {
      description: {
        story: `
### E-commerce Product Carousel

Multiple products visible at once with responsive design.

\`\`\`tsx
<Carousel
  options={{
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  }}
  showDots={false}
>
  {products.map((product) => (
    <CarouselItem key={product.id} className="flex-[0_0_300px] px-3">
      <ProductCard product={product} />
    </CarouselItem>
  ))}
</Carousel>
\`\`\`

**Features:**
- Multiple products visible
- Smooth drag scrolling
- Responsive product cards
- Shopping interactions
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8 max-w-6xl mx-auto flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Showcase</h1>
        <p className="text-gray-600">Browse our featured products with smooth navigation</p>
      </div>

      <Carousel
        className="w-80 h-auto object-contain"
        options={{
          align: 'start',
          containScroll: 'trimSnaps',
          dragFree: true,
          slidesToScroll: 1
        }}
        showDots={false}
        autoplay={false}
        arrows={{
          size: 20,
          className: "bg-white shadow-xl hover:bg-gray-50 border border-gray-200"
        }}
      >
        {sampleProducts.map((product) => (
          <CarouselItem key={product.id} className="flex-[0_0_300px] px-3">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <ShoppingCart size={16} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>

      <div className="bg-blue-50 p-6 rounded-xl">
        <h3 className="font-semibold text-blue-900 mb-3">Product Carousel Features:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-sm text-blue-800 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Multiple products visible simultaneously</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Smooth drag-free scrolling</span>
            </li>
          </ul>
          <ul className="text-sm text-blue-800 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Interactive product cards</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Star ratings and pricing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

// =================== STORY: VERTICAL TESTIMONIALS ===================
export const VerticalTestimonials: Story = {
  name: '📝 Vertical Testimonials',
  parameters: {
    docs: {
      description: {
        story: `
### Vertical Carousel Layout

Perfect for testimonials and content that benefits from vertical scrolling.

\`\`\`tsx
<Carousel
  className="h-[500px]"
  options={{ 
    axis: 'y',
    loop: true 
  }}
  autoplay={{ 
    delay: 6000,
    stopOnInteraction: true 
  }}
  dots={{
    position: "right",
    size: 10
  }}
>
  {testimonials.map((testimonial) => (
    <CarouselItem key={testimonial.id}>
      <TestimonialCard testimonial={testimonial} />
    </CarouselItem>
  ))}
</Carousel>
\`\`\`

**Features:**
- Vertical scrolling orientation
- Right-side dot navigation
- Up/down arrow controls
- Perfect for tall content
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Customer Testimonials</h1>
        <p className="text-gray-600">What our customers say about us</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Carousel 
          className="h-[500px]" // Fixed height is required for vertical carousel
          options={{ 
            axis: 'y',
            loop: true,
            align: 'start', // Important for vertical alignment
            skipSnaps: false,
            dragFree: false
          }}
          autoplay={{ 
            delay: 6000,
            stopOnInteraction: true 
          }}
          dots={{
            position: "right",
            size: 12,
            activeClass: "bg-blue-600",
            inactiveClass: "bg-gray-300"
          }}
          arrows={{
            size: 20,
            className: "bg-white shadow-lg hover:bg-gray-50 border",
            iconPrev: <ChevronUp size={20} />,
            iconNext: <ChevronDown size={20} />
          }}
        >
          {sampleTestimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="h-full"> {/* Add h-full class */}
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center border">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      <div className="bg-green-50 p-6 rounded-xl">
        <h3 className="font-semibold text-green-900 mb-3">Vertical Carousel Benefits:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="text-sm text-green-800 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Perfect for testimonials and quotes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Space-efficient for tall content</span>
            </li>
          </ul>
          <ul className="text-sm text-green-800 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Natural scrolling motion</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Right-side navigation dots</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
};

// =================== STORY: ACCESSIBILITY FEATURES ===================
export const AccessibilityFeatures: Story = {
  name: '♿ Accessibility Features',
  parameters: {
    docs: {
      description: {
        story: `
### Comprehensive Accessibility

WCAG 2.1 AA compliant carousel with full keyboard and screen reader support.

\`\`\`tsx
<Carousel
  aria-label="Featured nature photography gallery"
  options={{ loop: true }}
  autoplay={{ delay: 6000 }}
>
  {images.map((image, index) => (
    <CarouselItem key={index}>
      <img 
        src={image.src}
        alt={image.alt} // Descriptive alt text required
        className="w-full h-[400px] object-cover"
      />
    </CarouselItem>
  ))}
</Carousel>
\`\`\`

**Accessibility Features:**
- Full keyboard navigation (arrow keys, Tab, Enter, Space)
- Screen reader announcements for slide changes
- Proper ARIA roles and labels
- High contrast focus indicators
- Touch targets ≥44px for mobile
- Respects reduced motion preferences
        `,
      },
    },
  },
  render: () => (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Accessibility Features</h1>
        <p className="text-gray-600">
          Built-in accessibility ensures the carousel works for everyone
        </p>
      </div>

      <Carousel 
        className="w-full"
        options={{ loop: true }}
        autoplay={{ delay: 6000 }}
        aria-label="Featured nature photography gallery"
      >
        {sampleImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <h3 className="font-semibold">{image.title}</h3>
                <p className="text-sm opacity-90">Image {index + 1} of {sampleImages.length}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-blue-800 text-sm">
          <strong>Try it:</strong> Tab to focus the carousel controls, then use arrow keys to navigate. 
          Screen readers will announce slide changes and provide context about the current image.
        </p>
      </div>

      {/* Accessibility Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyboard Navigation</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">←→</kbd>
              <span className="text-sm">Navigate horizontally</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">↑↓</kbd>
              <span className="text-sm">Navigate vertically</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Tab</kbd>
              <span className="text-sm">Focus navigation controls</span>
            </div>
            <div className="flex items-center gap-3">
              <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-sm font-mono">Enter</kbd>
              <span className="text-sm">Activate focused control</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Screen Reader Support</h3>
          <ul className="text-sm space-y-2">
            <li>• <strong>role="region"</strong> with <strong>aria-roledescription="carousel"</strong></li>
            <li>• Each slide has <strong>role="group"</strong> and <strong>aria-roledescription="slide"</strong></li>
            <li>• Navigation controls have descriptive <strong>aria-label</strong> attributes</li>
            <li>• Current slide indicated with <strong>aria-current="true"</strong></li>
          </ul>
        </div>
      </div>

      {/* Testing Checklist */}
      <div className="bg-yellow-50 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-yellow-900 mb-4">Accessibility Testing Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Manual Testing</h4>
            <div className="space-y-2">
              {[
                'Tab navigation reaches all controls',
                'Arrow keys navigate slides correctly',
                'Focus indicators are clearly visible',
                'Screen reader announces slide changes'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-yellow-800 mb-2">Automated Testing</h4>
            <div className="space-y-2">
              {[
                'axe-core accessibility audit passes',
                'Color contrast meets WCAG AA',
                'Touch targets meet 44px minimum',
                'Component works at 200% zoom'
              ].map((test, index) => (
                <label key={index} className="flex items-center gap-2 text-sm text-yellow-700">
                  <input type="checkbox" className="rounded" />
                  <span>{test}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
