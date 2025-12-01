// Application configuration from environment variables

export interface BankAccountDetails {
  accountName: string
  accountNumber: string
  bankName: string
}

// Get bank account details from environment variables
export const getBankAccountDetails = (): BankAccountDetails => {
  return {
    accountName: import.meta.env.VITE_BANK_ACCOUNT_NAME || 'Child Rights Foundation',
    accountNumber: import.meta.env.VITE_BANK_ACCOUNT_NUMBER || '[Account Number]',
    bankName: import.meta.env.VITE_BANK_NAME || '[Bank Name]',
  }
}

// Check if bank details are configured
export const isBankDetailsConfigured = (): boolean => {
  const details = getBankAccountDetails()
  return (
    details.accountNumber !== '[Account Number]' &&
    details.accountNumber !== '' &&
    details.bankName !== '[Bank Name]' &&
    details.bankName !== ''
  )
}

// Get contact email
export const getContactEmail = (): string => {
  return import.meta.env.VITE_CONTACT_EMAIL || 'donate@thechildrightsfoundation.org'
}

