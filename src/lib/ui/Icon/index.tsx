import { InfoIcon } from "@/lib/assets/icons/icons";
import { FC } from "react";

export type IconName = "info";

interface IconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name }) => {
  return name === "info" ? <InfoIcon /> : null;
};

export default Icon;
