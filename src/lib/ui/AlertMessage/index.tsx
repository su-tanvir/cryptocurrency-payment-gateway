import { FC, ReactElement } from "react";
import Icon from "../Icon";
import styles from "./styles.module.css";

export type AlertMessageSeverity = "success" | "error";

interface AlertMessageProps {
  severity: AlertMessageSeverity;
  title: string;
  description: string;
  action?: ReactElement;
}

export const AlertMessage: FC<AlertMessageProps> = ({
  severity,
  title,
  description,
  action,
}) => {
  return (
    <div className={styles.root}>
      <Icon name={severity} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      {action}
    </div>
  );
};

export default AlertMessage;
