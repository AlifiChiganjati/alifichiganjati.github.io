import type { ReactNode } from "react";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

export default function AccordionContent({ isOpen, children }: Props) {
  if (!isOpen) return null;

  return <div className="">{children}</div>;
}
