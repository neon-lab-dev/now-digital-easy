import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "cta";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    const baseStyles = `text-button rounded-[4px] border px-3 shadow`;

    const variantStyles = {
      primary: `border-primary-400 hidden md:block`,
      secondary: `border-primary-400 bg-primary-400 text-white hidden max-lg:px-1`,
      cta: `px-6 py-3 bg-primary-400 flex items-center gap-2 text-white rounded-[50px]`,
    };

    const classes = twMerge(baseStyles, variantStyles[variant], className);

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
