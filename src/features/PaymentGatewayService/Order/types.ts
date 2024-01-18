import { Cryptocurrency } from "../Cryptocurrency/types";

export type OrderStatus = "draft" | "loading" | "created" | "error";

export interface CreateOrderRequestDTO {
  expected_output_amount: number;
  fiat: string;
  input_currency: string;
  notes: string;
  language: string;
  merchant_url_standby: string;
  merchant_urlok: string;
  merchant_urlko: string;
}

export interface CreateOrderResponseDTO {
  identifier: `${string}-${string}-${string}-${string}-${string}`;
  reference: string | null;
  payment_uri: string | null;
  web_url: string;
  address: string | null;
  tag_memo: string | null;
  input_currency: string | null;
  expected_input_amount: number | null;
  rate: number | null;
  notes: string;
  fiat: string;
  language: string;
}

type Identifier = `${string}-${string}-${string}-${string}-${string}`;

export interface GetOrderInfoResponseDTO {
  identifier: Identifier;
  reference: string | null;
  created_at: string;
  edited_at: string;
  status: string;
  fiat_amount: number;
  crypto_amount: number;
  unconfirmed_amount: number;
  confirmed_amount: number;
  currency_id: string;
  merchant_device_id: number;
  merchant_device: string;
  address: string | null;
  tag_memo: string | null;
  url_ko: string | null;
  url_ok: string | null;
  url_standby: string | null;
  expired_time: string;
  good_fee: boolean;
  notes: string;
  rbf: boolean;
  safe: boolean;
  fiat: string;
  language: string;
  percentage: number;
  received_amount: number;
  balance_based: string;
  internal_data: string | null;
  transactions: [];
}

export type OrderLineStatus = "pending" | "paid" | "expired" | "rejected";

export interface OrderLine {
  identifier: Identifier;
  status: OrderLineStatus;
  fiat: string;
  fiatAmount: number;
  cryptocurrency: Cryptocurrency;
  createdAt: string;
  expirationDateTime: string;
  notes: string;
  cryptoAmount: number;
  address: string | null;
  tagMemo: string | null;
  paymentUri: string | null;
  paymentWebUrl: string;
}
