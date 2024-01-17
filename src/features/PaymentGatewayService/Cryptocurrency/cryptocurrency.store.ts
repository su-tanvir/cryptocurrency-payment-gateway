import { ApiCallStatus } from "@/lib/types/common";
import { create } from "zustand";
import { getCryptoCurrenciesFromApi } from "./cryptocurrency.api";
import { Cryptocurrencies } from "./types";

interface InitialState {
  status: ApiCallStatus;
  cryptocurrencies: Cryptocurrencies | null;
  isCryptoSelectable: boolean;
  getCryptocurrencies: () => void;
  toggleCryptoSelectable: () => void;
}

export const useCryptocurrencyStore = create<InitialState>((set, get) => {
  return {
    status: "idle",
    cryptocurrencies: null,
    isCryptoSelectable: false,

    getCryptocurrencies: () => {
      set({ status: "loading" });
      getCryptoCurrenciesFromApi()
        .then((currencies) => {
          set({ status: "success", cryptocurrencies: currencies });
        })
        .catch(() => {
          set({ status: "error" });
        });
    },

    toggleCryptoSelectable: () => {
      const { isCryptoSelectable } = get();
      set({ isCryptoSelectable: !isCryptoSelectable });
    },
  };
});
