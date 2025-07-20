import React from "react";
import cn from "../../lib/cn";
import { cva ,type VariantProps } from "class-variance-authority";
import { Trash2Icon } from "lucide-react";
const TextAreaVariant=cva(
   "flex w-full min-h-[100px] rounded-md border border-input  px-3 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed", 
   {
    variants:{
        variant:{
         default: "border border-input bg-background",
         ghost: "border-transparent bg-transparent shadow-none",
         outline:"border-1 border-input bg-transparent shadow-none"
        },
        size:{
          sm: "px-2 py-1 text-sm",
          md: "px-3 py-2 text-sm",
         lg: "px-4 py-3 text-base",
        }
    },
    defaultVariants:{
        variant:"default",
        size:"md",
    }
   }
)


export interface TextAreaProps 
extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,VariantProps<typeof TextAreaVariant>{
    label?:string;
    errorMessage?:string;    
    clearable?:boolean;
    autoResize?:boolean;
    className?:string;
    showCounter?:boolean
    
}
const TextArea = React.forwardRef<
  HTMLTextAreaElement,TextAreaProps>(({ className,clearable,variant,size, label,showCounter,id,autoResize=false,onInput,...props }, ref) => {
    const internalRef=React.useRef<HTMLTextAreaElement>(null);
    const[charCount,setCharCount]=React.useState(props.value?.toString().length??0);   
    React.useEffect(()=>{
        if(autoResize && internalRef.current){
            internalRef.current.style.height="auto";
            internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;        
        }
    },[props.value])

    const setRef=(el:HTMLTextAreaElement)=>{
        internalRef.current=el;
        if(typeof ref==="function")ref(el);
        else if(ref)ref.current=el;
    }
    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
      const target=e.currentTarget;
      setCharCount(target.value.length);  
      if (autoResize && internalRef.current) {
        internalRef.current.style.height = "auto";
        internalRef.current.style.height = `${internalRef.current.scrollHeight}px`;
      }
      onInput?.(e); 
    };
    return (
    <div className="flex flex-col gap-1">
        {label && (
            <label htmlFor={id} className="text-sm font-medium text-foreground">
                {label}
            </label>
        )}
        <div className="relative w-full">
        <textarea
          id={id}
          ref={setRef}
          onInput={handleInput}
          className={cn(TextAreaVariant({size,variant}),
          clearable ? "pr-10":""
          ,className)}
          {...props}
        />
        {clearable && (props.value ?? "").toString().length > 0 && (
      <button
        type="button"
        onClick={() => {
          const event = {
            ...new Event("input", { bubbles: true }),
            target: {
              ...internalRef.current,
              value: "",
            },
          } as unknown as React.FormEvent<HTMLTextAreaElement>;

          if (internalRef.current) {
            internalRef.current.value = "";
            internalRef.current.focus();
            internalRef.current.dispatchEvent(new Event("input", { bubbles: true }));
          }

          props.onChange?.({
            target: { value: "" },
          } as any);
        }}
        className="absolute right-2 top-2 text-muted-foreground px-2 border rounded-md border-gray-300 hover:text-foreground text-sm"
      >
       <Trash2Icon className="w-4"/>
      </button>
    )}
        </div>
        {showCounter && props.maxLength && (
            <div className="text-xs text-muted-foreground text-right mt-1">
             {charCount} / {props.maxLength}
        </div>
       )}
    </div>
  );
});

TextArea.displayName = "TextArea";

export {TextArea,TextAreaVariant}
