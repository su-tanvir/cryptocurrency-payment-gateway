import { useEffect } from "react";
import { useCryptocurrency } from "../Cryptocurrency/useCryptocurrency";
import { useOrderStore } from "./order.store";

export const useOrder = () => {
  const {
    status,
    amount,
    cryptocurrency,
    concept,
    setData,
    createOrder,
    orderLine,
  } = useOrderStore();
  const { initialCrypto } = useCryptocurrency();

  useEffect(() => {
    if (!cryptocurrency && initialCrypto) {
      setData("cryptocurrency", initialCrypto);
    }
  });

  return {
    status,
    amount,
    cryptocurrency: cryptocurrency ?? initialCrypto,
    concept,
    setData,
    createOrder,
    orderLine,
  };
};
