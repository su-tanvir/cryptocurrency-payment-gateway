import { EUROPEAN_FIAT, SPANISH_LANGUAGE_CODE } from "@/lib/constants/global";
import {
  BASE_APP_URL,
  CHECKOUT_CONFIRMATION_PATH,
  CHECKOUT_KO_PATH,
  CHECKOUT_OK_PATH,
} from "@/lib/constants/settings";
import { convertStringToNumber } from "@/lib/utils/stringTools";
import { create } from "zustand";
import { Cryptocurrency } from "../Cryptocurrency/types";
import {
  createPaymentOrderFromApi,
  getPaymentOrderInfoFromApi,
} from "./order.service";
import { transformCodeToOrderLineStatus } from "./order.util";
import { OrderLine, OrderStatus } from "./types";

type OrderDataKey = keyof InitialState;

interface InitialState {
  status: OrderStatus;
  amount: string | null;
  cryptocurrency: Cryptocurrency | undefined;
  concept: string | null;
  orderLine: OrderLine | null;
  setData: (
    key: OrderDataKey,
    value: OrderStatus | Cryptocurrency | string
  ) => void;
  createOrder: () => void;
}

export const useOrderStore = create<InitialState>((set, get) => {
  return {
    status: "draft",
    amount: null,
    cryptocurrency: undefined,
    concept: null,
    orderLine: null,

    setData: (key, value) => {
      set({ [key]: value });
    },

    createOrder: async () => {
      const { amount, cryptocurrency, concept } = get();
      if (!amount || !cryptocurrency || !concept)
        throw new Error("Cannot create order without data");

      set({ status: "loading" });

      try {
        const order = await createPaymentOrderFromApi({
          expected_output_amount: convertStringToNumber(amount),
          fiat: EUROPEAN_FIAT,
          input_currency: cryptocurrency.symbol,
          notes: concept,
          language: SPANISH_LANGUAGE_CODE,
          merchant_url_standby: `${BASE_APP_URL}${CHECKOUT_CONFIRMATION_PATH}`,
          merchant_urlok: `${BASE_APP_URL}${CHECKOUT_OK_PATH}`,
          merchant_urlko: `${BASE_APP_URL}${CHECKOUT_KO_PATH}`,
        });

        const orderInfo = await getPaymentOrderInfoFromApi(order.identifier);

        const orderLine: OrderLine = {
          identifier: orderInfo.identifier,
          status: transformCodeToOrderLineStatus(orderInfo.status),
          fiat: orderInfo.fiat,
          fiatAmount: orderInfo.fiat_amount,
          cryptocurrency: cryptocurrency,
          createdAt: orderInfo.created_at,
          expirationDateTime: orderInfo.expired_time,
          notes: orderInfo.notes,
          cryptoAmount: orderInfo.crypto_amount,
          address: orderInfo.address,
          tagMemo: orderInfo.tag_memo,
          paymentUri: order.payment_uri,
          paymentWebUrl: order.web_url,
        };

        set({ status: "created", orderLine: orderLine });
      } catch (error) {
        set({ status: "error" });
      }
    },
  };
});
