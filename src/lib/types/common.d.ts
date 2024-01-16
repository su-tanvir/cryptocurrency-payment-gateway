export type NameValueString = NameValue<string>;

export interface NameValue<T> {
  name: string;
  value: T;
}
