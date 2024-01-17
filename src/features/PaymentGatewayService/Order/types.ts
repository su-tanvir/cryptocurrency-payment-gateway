export type OrderStatus = "draft" | "created" | "paid" | "expired" | "rejected";

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
