import { BASE_API_URL } from "@/lib/constants/settings";
import { makeApiCall } from "@/lib/utils/apiService";
import {
  CreateOrderRequestDTO,
  CreateOrderResponseDTO,
  GetOrderInfoResponseDTO,
} from "./types";

export const createPaymentOrderFromApi = async (
  order: CreateOrderRequestDTO
) => {
  const url = `${BASE_API_URL}/orders/`;

  const res = await makeApiCall<CreateOrderResponseDTO>({
    url: url,
    options: {
      method: "POST",
      body: JSON.stringify(order),
    },
  });

  return res;
};

export const getPaymentOrderInfoFromApi = async (orderId: string) => {
  const url = `${BASE_API_URL}/orders/info/${orderId}`;

  const [firstOrderInfo] = await makeApiCall<GetOrderInfoResponseDTO[]>({
    url: url,
    options: {
      method: "GET",
    },
  });

  return firstOrderInfo;
};
