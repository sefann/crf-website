# Payment Gateway Integration Guide

This guide explains how to set up Paystack, Stripe, and Monnify payment gateways for the CRF website.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Paystack (for NGN)
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here

# Stripe (for USD, EUR, GBP)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key_here

# Monnify (for NGN)
VITE_MONNIFY_PUBLIC_KEY=MK_TEST_your_monnify_public_key_here
VITE_MONNIFY_CONTRACT_CODE=your_contract_code_here
VITE_MONNIFY_TEST_MODE=true
```

## 📋 Setup Instructions

### 1. Paystack Setup (NGN)

1. Sign up at [Paystack](https://paystack.com)
2. Get your public key from the dashboard
3. Add to `.env`: `VITE_PAYSTACK_PUBLIC_KEY=pk_test_...`
4. For production, use your live public key: `pk_live_...`

**Features:**
- Supports NGN only
- Cards, Bank Transfer, USSD
- Automatic receipt generation

### 2. Stripe Setup (USD, EUR, GBP)

1. Sign up at [Stripe](https://stripe.com)
2. Get your publishable key from the dashboard
3. Add to `.env`: `VITE_STRIPE_PUBLIC_KEY=pk_test_...`
4. **Note:** Stripe requires a backend server to create checkout sessions. For static hosting, consider:
   - Using Stripe Checkout (requires backend)
   - Using Stripe Payment Links (no code needed)
   - Using a serverless function (Vercel, Netlify)

**Features:**
- Supports USD, EUR, GBP
- Cards, Apple Pay, Google Pay
- International payments

### 3. Monnify Setup (NGN)

1. Sign up at [Monnify](https://monnify.com)
2. Get your API key and contract code from the dashboard
3. Add to `.env`:
   - `VITE_MONNIFY_PUBLIC_KEY=MK_TEST_...`
   - `VITE_MONNIFY_CONTRACT_CODE=...`
   - `VITE_MONNIFY_TEST_MODE=true` (set to `false` for production)

**Features:**
- Supports NGN only
- Cards, Bank Transfer, USSD
- Direct bank account debit

## 🚀 Testing

### Test Mode
All gateways support test mode:
- **Paystack:** Use `pk_test_...` keys
- **Stripe:** Use `pk_test_...` keys
- **Monnify:** Set `VITE_MONNIFY_TEST_MODE=true`

### Test Cards

**Paystack:**
- Card: `4084 0840 8408 4081`
- CVV: Any 3 digits
- Expiry: Any future date
- PIN: Any 4 digits

**Stripe:**
- Card: `4242 4242 4242 4242`
- CVV: Any 3 digits
- Expiry: Any future date

**Monnify:**
- Use test credentials from Monnify dashboard

## 🔄 Payment Flow

1. User selects amount and currency
2. System auto-selects recommended gateway:
   - NGN → Paystack (default) or Monnify
   - USD/EUR/GBP → Stripe
3. User enters name and email
4. User clicks "Proceed to Payment"
5. Payment gateway popup/redirect opens
6. User completes payment
7. Redirect to success page with transaction reference

## 📧 Receipts

All payment gateways automatically send email receipts to donors. Ensure your gateway accounts have email notifications enabled.

## 🔒 Security

- Never commit `.env` file to git
- Use environment variables for all keys
- Use test keys during development
- Switch to live keys only in production
- Enable webhook verification for payment confirmation

## 🐛 Troubleshooting

### Paystack not loading
- Check if Paystack script is loaded in `index.html`
- Verify public key is correct
- Check browser console for errors

### Stripe not working
- Stripe requires backend for checkout sessions
- Consider using Stripe Payment Links as alternative
- Or set up a serverless function

### Monnify not loading
- Verify API key and contract code
- Check if test mode is correctly set
- Ensure Monnify script loads correctly

## 📞 Support

For payment gateway issues:
- **Paystack:** support@paystack.com
- **Stripe:** support@stripe.com
- **Monnify:** support@monnify.com

For website issues, contact: donate@thechildrightsfoundation.org

