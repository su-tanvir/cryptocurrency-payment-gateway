/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import styles from "./styles.module.css";

export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return <img className={`${styles.root} ${className}`} src={src} alt={alt} />;
};

export default Image;
