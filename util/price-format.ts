import type { Rate } from "@/stores/currencySlice";

/**
 * Calculate and return the formatted price
 * @param selectedCurrency
 * @param price
 * @param rates
 * @returns formattedPrice
 */
export default function getFormattedPrice(
  selectedCurrency: string,
  price: number,
  rates?: Rate
): string {
  // getting current rate (default to USD)
  let currentRate = 1;
  let currency = "USD";
  if (rates) {
    currentRate = rates[selectedCurrency as keyof typeof rates];
    currency = selectedCurrency;
  }
  // compute and format price
  const computedPrice = price * currentRate;
  const formattedPrice = new Intl.NumberFormat("jp", {
    style: "currency",
    currency,
  }).format(computedPrice);

  return formattedPrice;
}
