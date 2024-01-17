import { ButtonHTMLAttributes, FC } from "react";
import styles from "./styles.module.css";

type ButtonVariant = "native" | "primary";
type ButtonSize = "default" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  variant = "native",
  size = "default",
  children,
  className = "",
  ...props
}) => (
  <button
    type={type}
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
    {...props}
  >
    {children}
  </button>
);
export default Button;
