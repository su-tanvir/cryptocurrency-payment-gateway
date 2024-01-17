export interface Cryptocurrency {
  symbol: string;
  name: string;
  min_amount: number;
  max_amount: number;
  image: string;
  blockchain: string;
}

export type Cryptocurrencies = Cryptocurrency[];
