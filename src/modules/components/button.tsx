import type { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("w-lg", {
  variants: {
    variant: {
      primary: "bg-black opacity-80 hover:opacity-100 text-white rounded",
      secondary: "bg-gray-300 hover:bg-gray-500 text-black rounded",
      link: "hover:bg-gray-200 text-gray-600 hover:text-black rounded",
    },
    size: {
      "5xl": "w-[18.875rem] h-[2.5rem] md:w-[24rem]     md:h-[2.5rem]",
      "4xl": "w-[11.1875rem] h-[2.5rem] md:w-[15.5rem]  md:h-[2.5rem]",
      "3xl": "w-[10.4375rem] h-[2.5rem] md:w-[11.75rem] md:h-[2.5rem]",
      "2xl": "w-[9.6875rem]  h-[2.5rem] md:w-[11.1875rem] md:h-[2.5rem]",
      xl: "w-[9.1875rem]  h-[2.5rem] md:w-[6.9375rem]  md:h-[2.5rem]",
      lg: "w-[5.25rem]    h-[1.75rem] md:w-[5.75rem]   md:h-[2.5rem]",
      md: "w-[4.4375rem]  h-[1.75rem] md:w-[5.4375rem] md:h-[2.5rem]",
      sm: "w-[3.375rem]   h-[1.75rem] md:w-[5.25rem]   md:h-[1.75rem]",
      xs: "w-[2.5rem]     h-[2.5rem]  md:w-[4.4375rem] md:h-[1.75rem]",
      "2xs": "w-[1.75rem] h-[1.75rem] md:w-[4.375rem] md:h-[2.5rem]",
      "3xs": "w-[3.375rem] h-[1.75rem]",
      "4xs": "w-[1.75rem] h-[1.75rem]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "xl",
  },
});
