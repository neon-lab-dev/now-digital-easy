import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", ...props }, ref) => {
    const baseStyles = `text-button rounded-[4px] border px-3 shadow`;

    const variantStyles = {
      primary: `border-primary-400 hidden md:block`,
      secondary: `border-primary-400 bg-primary-400 text-white hidden max-lg:px-1`,
    };

    const classes = twMerge(baseStyles, variantStyles[variant], className);

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export default Button;
