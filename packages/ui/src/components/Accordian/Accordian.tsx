import React from "react";

interface AccordionProps {
  label: string;
  content: string;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  return (
    <div ref={ref}>
      {/* Accordion content will go here */}
    </div>
  );
});

export default Accordion;
