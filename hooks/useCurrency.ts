import useSWR from "swr";

/**
 * Use to call fetch API
 * @param url
 * @returns data
 */
const fetcher = async (url: string) => {
  const headers = new Headers();
  headers.append("apikey", process.env.NEXT_PUBLIC_CURRENCY_API_KEY);
  return fetch(url, { headers }).then((r) => r.json());
};

/**
 * Get the data from currency API
 * @returns data
 */
export default function useCurrency() {
  let key = `${process.env.NEXT_PUBLIC_CURRENCY_API_URL}/latest?base=USD&symbols=EUR,GBP,JPY`;
  const { data } = useSWR(key, fetcher, {
    // disabled auto revalidation due to limit on api calls, needs to refresh page to get the latest currency rates
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data };
}
