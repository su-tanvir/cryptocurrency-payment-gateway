import { BASE_API_URL } from "@/lib/constants/settings";
import { makeApiCall } from "@/lib/utils/apiCall";
import { CreateOrderRequestDTO, CreateOrderResponseDTO } from "./types";

export const createPaymentOrderFromApi = async (
  order: CreateOrderRequestDTO
) => {
  const url = `${BASE_API_URL}/orders/`;

  const res = await makeApiCall<CreateOrderResponseDTO[]>({
    url: url,
    options: {
      method: "POST",
      body: JSON.stringify(order),
    },
  });

  return res;
};
