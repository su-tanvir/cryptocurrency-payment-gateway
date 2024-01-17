import { FC } from "react";
import Input, { InputProps } from "../Input";
import Label from "../Label";
import styles from "./styles.module.css";

interface TextFieldProps extends InputProps {
  label?: string;
  error?: string;
}

export const TextField: FC<TextFieldProps> = ({
  type = "text",
  id,
  state = "default",
  label,
  error,
  ...props
}) => {
  return (
    <div className={styles.root}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className={styles.wrapper}>
        <Input
          id={id}
          type={type}
          state={error ? "error" : "default"}
          {...props}
        />
      </div>
      {error && <small className={styles.error}>{error}</small>}
    </div>
  );
};

export default TextField;
