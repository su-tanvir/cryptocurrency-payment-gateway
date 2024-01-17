export type NameValueString = NameValue<string>;

export interface NameValue<T> {
  name: string;
  value: T;
}

export type ApiCallStatus = "idle" | "loading" | "success" | "error";
