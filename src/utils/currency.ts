// Currency configuration
export const SUPPORTED_CURRENCIES = ['NGN', 'USD', 'EUR', 'GBP'] as const
export type SupportedCurrency = typeof SUPPORTED_CURRENCIES[number]

export interface CurrencyInfo {
  code: string
  symbol: string
  name: string
  flag: string
}

export const CURRENCY_INFO: Record<SupportedCurrency, CurrencyInfo> = {
  NGN: { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', flag: '🇳🇬' },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧' },
}

// Detect user currency by browser locale and timezone
export const detectCurrency = (): SupportedCurrency => {
  if (typeof navigator === 'undefined') return 'NGN'

  const locale = navigator.language || navigator.languages?.[0] || "en-US"
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""

  // Check locale first
  if (locale.includes("NG") || locale.includes("ng")) return "NGN"
  if (locale.includes("GB") || locale.includes("gb")) return "GBP"
  if (locale.includes("FR") || locale.includes("fr") || locale.includes("DE") || locale.includes("IT") || locale.includes("ES")) return "EUR"
  if (locale.includes("US") || locale.includes("us") || locale.includes("CA") || locale.includes("ca")) return "USD"

  // Check timezone as fallback
  if (timezone.includes("Lagos") || timezone.includes("Africa/Lagos")) return "NGN"
  if (timezone.includes("London") || timezone.includes("Europe/London")) return "GBP"
  if (timezone.includes("Europe/")) return "EUR"
  if (timezone.includes("America/") || timezone.includes("US/")) return "USD"

  // Default fallback to NGN for Nigerian organization
  return "NGN"
}

// Get currency symbol
export const getCurrencySymbol = (currency: string): string => {
  return CURRENCY_INFO[currency as SupportedCurrency]?.symbol || currency
}

// Get full currency info
export const getCurrencyInfo = (currency: string): CurrencyInfo | null => {
  return CURRENCY_INFO[currency as SupportedCurrency] || null
}

// Validate currency
export const isValidCurrency = (currency: string): currency is SupportedCurrency => {
  return SUPPORTED_CURRENCIES.includes(currency as SupportedCurrency)
}

