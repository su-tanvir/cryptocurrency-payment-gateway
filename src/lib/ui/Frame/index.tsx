import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

interface FrameProps {
  children: ReactNode;
}

const Frame: FC<FrameProps> = ({ children }) => (
  <article className={styles.root}>{children}</article>
);
export default Frame;
