export interface CryptocurrencyResponseDTO {
  symbol: string;
  name: string;
  min_amount: string;
  max_amount: string;
  image: string;
  blockchain: string;
}

export interface Cryptocurrency {
  symbol: string;
  name: string;
  min_amount: number;
  max_amount: number;
  image: string;
  blockchain: string;
}

export type Cryptocurrencies = Cryptocurrency[];
