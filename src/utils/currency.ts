// Detect user currency by browser locale
export const detectCurrency = (): string => {
  const locale = navigator.language || "en-US";

  if (locale.includes("NG")) return "NGN"; // Nigeria
  if (locale.includes("GB")) return "GBP"; // UK
  if (locale.includes("FR") || locale.includes("EU")) return "EUR"; // France / EU
  if (locale.includes("US") || locale.includes("CA")) return "USD"; // US / Canada

  return "NGN"; // fallback to NGN for Nigerian organization
};

// Get currency symbol
export const getCurrencySymbol = (currency: string): string => {
  const symbols: { [key: string]: string } = {
    NGN: "₦",
    USD: "$",
    GBP: "£",
    EUR: "€",
  };
  return symbols[currency] || currency;
};

