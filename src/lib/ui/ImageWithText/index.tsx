import { FC } from "react";
import Image, { ImageProps } from "../Image";
import styles from "./styles.module.css";

type ImageWithTextProps = ImageProps & { text: string };

export const ImageWithText: FC<ImageWithTextProps> = ({ text, ...props }) => {
  return (
    <div className={styles.root}>
      <Image {...props} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Image;
