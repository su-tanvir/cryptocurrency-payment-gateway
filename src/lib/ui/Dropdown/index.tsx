import { NameValueString } from "@/lib/types/common";
import { ReactElement } from "react";
import CustomSelect from "../CustomSelect";
import styles from "./styles.module.css";

interface DropdownProps<T> {
  label?: ReactElement;
  value: T;
  options: T[];
  onClick?: () => void;
  onSelect?: (selectedValue: T) => void;
}

const Dropdown = ({
  label,
  value,
  options,
  onClick,
  onSelect,
}: DropdownProps<NameValueString>): ReactElement => {
  return (
    <div className={styles.dropdown}>
      {label}
      <CustomSelect
        type="static"
        value={value}
        options={options}
        onClick={onClick}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Dropdown;
