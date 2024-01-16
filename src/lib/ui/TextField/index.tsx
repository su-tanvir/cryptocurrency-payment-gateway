import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import Label from "../Label";
import styles from "./styles.module.css";

type TextFieldState = "default" | "error";

interface TextFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  state?: TextFieldState;
  label?: string;
}

export const TextField: FC<TextFieldProps> = ({
  type = "text",
  id,
  state = "default",
  label,
  placeholder,
  required,
  ...props
}) => {
  return (
    <div className={styles.root}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextField;
