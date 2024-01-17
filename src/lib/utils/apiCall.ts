import { DEVICE_ID } from "../constants/settings";

interface ApiCallProps {
  url: string;
  options?: RequestInit;
}

export const makeApiCall = async <T>({
  url,
  options,
}: ApiCallProps): Promise<T> => {
  if (!DEVICE_ID) throw new Error("Need Device id to connect with API");

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Device-Id": DEVICE_ID,
      },
    });

    if (response.ok) {
      const data = (await response.json()) as T;
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw error as Error;
  }
};
