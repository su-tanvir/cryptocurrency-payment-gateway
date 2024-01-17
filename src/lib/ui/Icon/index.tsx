import {
  ErrorIcon,
  InfoIcon,
  SearchIcon,
  SuccessIcon,
} from "@/lib/assets/icons/icons";
import { FC } from "react";
import { AlertMessageSeverity } from "../AlertMessage";

export type IconName = "info" | "search" | AlertMessageSeverity;

interface IconProps {
  name: IconName;
}

export const Icon: FC<IconProps> = ({ name }) => {
  return name === "info" ? (
    <InfoIcon />
  ) : name === "search" ? (
    <SearchIcon />
  ) : name === "success" ? (
    <SuccessIcon />
  ) : name === "error" ? (
    <ErrorIcon />
  ) : null;
};

export default Icon;
