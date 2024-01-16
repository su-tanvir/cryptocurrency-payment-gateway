import { FC } from "react";
import Icon, { IconName } from "../Icon";
import Label from "../Label";
import styles from "./styles.module.css";

interface LabelWithIconProps {
  id: string;
  text: string;
  icon: IconName;
}

export const LabelWithIcon: FC<LabelWithIconProps> = ({ id, text, icon }) => {
  return (
    <div className={styles.root}>
      <Label htmlFor={id}>{text}</Label>
      <Icon name={icon} />
    </div>
  );
};

export default LabelWithIcon;
