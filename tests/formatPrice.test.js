import { cartTotal, formatPrice } from "../lib/formatPrice";

describe("formatPrice", () => {
  it("formats a number with two decimals and the euro symbol", () => {
    expect(formatPrice(9.5)).toBe("€9.50");
  });

  it("rounds to two decimal places", () => {
    expect(formatPrice(2.345)).toBe("€2.35");
  });

  it("supports other currencies", () => {
    expect(formatPrice(10, "USD")).toBe("$10.00");
    expect(formatPrice(10, "GBP")).toBe("£10.00");
  });

  it("handles zero", () => {
    expect(formatPrice(0)).toBe("€0.00");
  });

  it("throws when given something that is not a finite number", () => {
    expect(() => formatPrice("9.50")).toThrow(TypeError);
    expect(() => formatPrice(NaN)).toThrow(TypeError);
    expect(() => formatPrice(Infinity)).toThrow(TypeError);
  });
});

describe("cartTotal", () => {
  it("returns 0 for an empty cart", () => {
    expect(cartTotal([])).toBe(0);
  });

  it("multiplies price by quantity", () => {
    expect(cartTotal([{ price: 5, quantity: 3 }])).toBe(15);
  });

  it("defaults quantity to 1", () => {
    expect(cartTotal([{ price: 4 }, { price: 6 }])).toBe(10);
  });
});
