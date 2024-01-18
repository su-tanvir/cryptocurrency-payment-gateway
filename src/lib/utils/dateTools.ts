/**
 * Pre: 'date' should be a non-empty string in a valid date format
 * Post: returns a formatted date string in the 'dd/mm/yyyy hh:mm' format
 */
export const transformStringDateToLocalString = (date: string) => {
  const newDate = new Date(date);

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
