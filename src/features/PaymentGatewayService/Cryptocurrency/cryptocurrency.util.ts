/**
 * Possible cryptos: BCH_TEST, BTC_TEST, ETH_TEST3, USDC_TEST3, XRP_TEST
 */
export const findNetworkByCryptoSymbol = (cryptoSymbol: string) => {
  const [symbol] = cryptoSymbol.split("_");
  return symbol.toLowerCase();
};
