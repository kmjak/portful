import { JSX, ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
}

export default function PageTitle({ children }: PageTitleProps): JSX.Element {
  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4">
      {children}
    </h1>
  );
}
