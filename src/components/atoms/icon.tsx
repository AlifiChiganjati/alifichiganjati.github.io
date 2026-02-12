import type { ReactElement } from "react";

interface IconProps {
  children: ReactElement;
  className?: string;
}
export const Icon = ({ children, className }: IconProps) => {
  return <div className={className}>{children}</div>;
};
