import { FC, HTMLProps, ReactNode } from "react";
import "./styles.module.css";

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  htmlFor: string;
  children: ReactNode;
}

export const Label: FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
