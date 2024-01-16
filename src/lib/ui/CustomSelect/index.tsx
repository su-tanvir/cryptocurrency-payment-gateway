/* eslint-disable @next/next/no-img-element */
import { ArrowDownIcon } from "@/lib/assets/icons/icons";
import { NameValueString } from "@/lib/types/common";
import { FC, useState } from "react";
import { ImageWithText } from "../ImageWithText";
import styles from "./styles.module.css";

type CustomSelectType = "default" | "static";

interface CustomSelectProps {
  type?: CustomSelectType;
  value: NameValueString;
  onClick?: () => void;
  onSelect?: (selectedValue: NameValueString) => void;
  options: NameValueString[];
}

export const CustomSelect: FC<CustomSelectProps> = ({
  type = "default",
  value,
  onClick,
  onSelect,
  options,
}) => {
  const { name, value: src } = value;
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectClick = () => {
    if (type === "default") setShowOptions(!showOptions);
    else if (type === "static" && onClick) onClick();
  };

  const handleOptionClick = (option: NameValueString) => {
    if (type === "default") {
      setShowOptions(false);
      onSelect && onSelect(option);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.select} onClick={handleSelectClick}>
        <ImageWithText src={src} alt={name} text={name} />
        <ArrowDownIcon className={styles.icon} />
      </div>
      {type === "default" && showOptions && options.length > 0 && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li key={name} onClick={() => handleOptionClick(option)}>
              <ImageWithText
                src={option.value}
                alt={option.name}
                text={option.name}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
