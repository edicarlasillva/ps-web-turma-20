import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>{children}</div>
  );
}
