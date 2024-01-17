import { BASE_APP_URL } from "@/lib/constants/settings";
import { create } from "zustand";
import { Cryptocurrency } from "../Cryptocurrency/types";
import { createPaymentOrderFromApi } from "./order.api";
import { OrderStatus } from "./types";

type OrderDataKey = keyof InitialState;

interface InitialState {
  status: OrderStatus;
  amount: number | null;
  cryptocurrency: Cryptocurrency | undefined;
  concept: string | null;
  setData: (
    key: OrderDataKey,
    value: OrderStatus | number | Cryptocurrency | string | number
  ) => void;
  createOrder: () => void;
}

export const useOrderStore = create<InitialState>((set, get) => {
  return {
    status: "draft",
    amount: null,
    cryptocurrency: undefined,
    concept: null,

    setData: (key, value) => {
      set({ [key]: value });
    },

    createOrder: () => {
      const { amount, cryptocurrency, concept } = get();
      if (!amount || !cryptocurrency || !concept)
        throw new Error("Cannot create order without data");

      createPaymentOrderFromApi({
        expected_output_amount: amount,
        fiat: "EUR",
        input_currency: cryptocurrency.symbol,
        notes: concept,
        language: "ES",
        merchant_url_standby: `${BASE_APP_URL}/checkout/confirmation`,
        merchant_urlok: `${BASE_APP_URL}/checkout/ok`,
        merchant_urlko: `${BASE_APP_URL}/checkout/ko`,
      })
        .then((res) => {
          console.log(res);
          set({ status: "created" });
        })
        .catch((error) => {
          console.log(error);
          set({ status: "rejected" });
        });
    },
  };
});
