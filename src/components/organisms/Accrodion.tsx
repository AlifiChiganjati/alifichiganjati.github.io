import { useState, type ReactNode } from "react";
import AccordionHeader from "../molecules/AccordionHeader";
import AccordionContent from "../molecules/AccordionContent";

type Props = {
  title: string;
  children: ReactNode;
};

export default function Accordion({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <section className="mb-2">
      <AccordionHeader title={title} isOpen={isOpen} onToggle={toggle} />
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </section>
  );
}
