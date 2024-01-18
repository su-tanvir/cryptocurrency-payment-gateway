import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

const Frame: FC<FrameProps> = ({ children, className }) => (
  <article className={`${styles.root} ${className}`}>{children}</article>
);
export default Frame;
