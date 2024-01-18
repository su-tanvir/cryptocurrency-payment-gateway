/**
 * Pre:'value' should be a non-null and non-empty string
 * Post:
 *  - If the conversion is successful, returns a number rounded to two decimal places
 *  - If the conversion fails, throws an error.
 */
export const convertStringToNumber = (value: string) => {
  const number = parseFloat(value);

  if (isNaN(number)) throw new Error("String cannot be converted to a number");

  const roundedNumber = Number(number.toFixed(2));
  return roundedNumber;
};
