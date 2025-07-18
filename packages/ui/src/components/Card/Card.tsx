import React from "react";
import cn from "../../lib/cn";

const Card=
React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className,...props},ref)=>(
   <div
    ref={ref}
    className={cn(
        "p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800",
        className
    )}
   
   {...props}
   
   />
  
))

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col text-2xl leading-none font-semibold tracking-tight space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"



Card.displayName="Card"

const CardBody= React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} 
  className={cn("p-6 pt-0 ", className)} {...props} />
))

Card.displayName="CardBody"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center  p-6 pt-0 space-x-2", className)}
      {...props}
    />
  )
})

CardFooter.displayName = "CardFooter"

export { Card,CardBody,CardFooter,CardHeader }