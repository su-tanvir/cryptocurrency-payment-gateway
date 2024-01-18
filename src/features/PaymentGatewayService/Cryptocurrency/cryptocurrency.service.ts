import { BASE_API_URL } from "@/lib/constants/settings";
import { makeApiCall } from "@/lib/utils/apiService";
import { Cryptocurrencies, CryptocurrencyResponseDTO } from "./types";

export const getCryptoCurrenciesFromApi = async () => {
  const url = `${BASE_API_URL}/currencies`;

  const currencies = await makeApiCall<CryptocurrencyResponseDTO[]>({
    url: url,
    options: {
      method: "GET",
    },
  });

  const res: Cryptocurrencies = currencies.map((currency) => ({
    ...currency,
    min_amount: Number(currency.min_amount),
    max_amount: Number(currency.max_amount),
  }));

  return res;
};
