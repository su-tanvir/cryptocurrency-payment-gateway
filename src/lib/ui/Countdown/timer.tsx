import { useRemainingTime } from "@/lib/hooks/useRemainingTime";
import styles from "./styles.module.css";

const Timer = ({ targetStringDate }: { targetStringDate: string }) => {
  const { minutes, seconds } = useRemainingTime(targetStringDate);

  return (
    <p className={styles.timer}>{`${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`}</p>
  );
};

export default Timer;
