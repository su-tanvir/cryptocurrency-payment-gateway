import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import Icon, { IconName } from "../Icon";
import styles from "./styles.module.css";

type InputState = "default" | "error";

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  state?: InputState;
  startIcon?: IconName;
}

export const Input: FC<InputProps> = ({
  type = "text",
  id,
  state = "default",
  placeholder,
  startIcon,
  ...props
}) => {
  return (
    <div className={`${styles.root} ${styles[state]}`}>
      {startIcon && <Icon name="search" />}
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

export default Input;
