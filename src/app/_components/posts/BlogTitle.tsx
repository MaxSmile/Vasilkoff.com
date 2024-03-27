import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function BlogTitle({ children }: Props) {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight my-12 text-left">
      {children}
    </h2>
  );
}
