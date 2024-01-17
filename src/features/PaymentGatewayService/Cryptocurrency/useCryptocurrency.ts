import { useCryptocurrencyStore } from "./cryptocurrency.store";

export function useCryptocurrency() {
  const {
    status,
    cryptocurrencies,
    getCryptocurrencies,
    isCryptoSelectable,
    toggleCryptoSelectable,
  } = useCryptocurrencyStore();

  return {
    status,
    cryptocurrencies,
    getCryptocurrencies,
    isCryptoSelectable,
    toggleCryptoSelectable,
    initialCrypto: cryptocurrencies?.at(0),
  };
}
