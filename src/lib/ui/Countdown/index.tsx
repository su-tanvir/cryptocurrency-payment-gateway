import { TimerIcon } from "@/lib/assets/icons/icons";
import styles from "./styles.module.css";
import Timer from "./timer";

const Countdown = ({ target }: { target: string }) => {
  return (
    <div className={styles.root}>
      <TimerIcon />
      <Timer targetStringDate={target} />
    </div>
  );
};

export default Countdown;
