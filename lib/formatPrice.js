/**
 * Format a number as a price string.
 * Throws on values that are not finite numbers.
 */
export function formatPrice(amount, currency = "EUR") {
  if (typeof amount !== "number" || !Number.isFinite(amount)) {
    throw new TypeError("formatPrice expects a finite number");
  }

  const symbols = { EUR: "€", USD: "$", GBP: "£" };
  const symbol = symbols[currency] ?? "";

  return `${symbol}${amount.toFixed(2)}`;
}

/** Total of an array of { price, quantity } line items. */
export function cartTotal(items = []) {
  return items.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 1),
    0
  );
}
