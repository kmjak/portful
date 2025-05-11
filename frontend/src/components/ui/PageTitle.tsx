import cn from "@/utils/tailwindcss/cn";
import { HTMLProps, JSX, ReactNode } from "react";

interface PageTitleProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
}

export default function PageTitle({ children, className, ...props }: PageTitleProps): JSX.Element {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
