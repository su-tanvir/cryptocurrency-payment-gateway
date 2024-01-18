import { useEffect, useState } from "react";
import { getRemainingTimeOfDate } from "../utils/dateTools";

export const useRemainingTime = (targetStringDate: string) => {
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTimeOfDate(targetStringDate)
  );

  const { days, hours, minutes, seconds } = remainingTime;
  const countdownEnded =
    days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  useEffect(() => {
    const timer =
      !countdownEnded &&
      setInterval(() => {
        setRemainingTime(getRemainingTimeOfDate(targetStringDate));
      }, 1000);

    if (timer && countdownEnded) clearInterval(timer);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdownEnded, targetStringDate]);

  return { days, hours, minutes, seconds };
};
