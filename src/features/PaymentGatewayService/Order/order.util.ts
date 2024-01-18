import { OrderLineStatus } from "./types";

export const transformCodeToOrderLineStatus = (
  code: string
): OrderLineStatus => {
  if (code === "PE") return "pending";
  else if (code === "CO" || code === "AC") return "paid";
  else if (code === "EX" || code === "OC") return "expired";
  return "rejected";
};
