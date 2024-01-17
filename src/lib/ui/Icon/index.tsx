import { InfoIcon, SearchIcon } from "@/lib/assets/icons/icons";
import { FC } from "react";

export type IconName = "info" | "search";

interface IconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name }) => {
  return name === "info" ? (
    <InfoIcon />
  ) : name === "search" ? (
    <SearchIcon />
  ) : null;
};

export default Icon;
