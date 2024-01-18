/**
 * Pre: 'date' should be a non-empty string in a valid date format
 * Post: returns a formatted date string in the 'dd/mm/yyyy hh:mm' format
 */
export const transformStringDateToLocalString = (stringDate: string) => {
  const newDate = new Date(stringDate);

  const formattedDate = newDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return formattedDate.replace(",", " ");
};

export const getRemainingTimeOfDate = (targetStringDate: string) => {
  const targetTime = new Date(targetStringDate).getTime();
  const currentTime = new Date().getTime();
  const difference = targetTime - currentTime;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const minuteInMs = 1000 * 60;
  const hourInMs = minuteInMs * 60;
  const dayInMs = hourInMs * 24;

  const days = Math.floor(difference / dayInMs);
  const hours = Math.floor((difference % dayInMs) / hourInMs);
  const minutes = Math.floor((difference % hourInMs) / minuteInMs);
  const seconds = Math.floor((difference % minuteInMs) / 1000);

  return { days, hours, minutes, seconds };
};
