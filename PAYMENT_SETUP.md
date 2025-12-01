# Payment Integration Setup Guide

This guide explains how to set up the optimized payment system for international and local donations.

## 🎯 Overview

The payment system supports:
- **Local (NGN)**: Paystack & Monnify
- **International (USD, EUR, GBP)**: Stripe

The system automatically:
- Detects user currency based on browser locale/timezone
- Selects the best payment gateway for the currency
- Shows only available payment methods
- Handles errors gracefully

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Paystack (for NGN - Local)
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key_here

# Stripe (for USD, EUR, GBP - International)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key_here
VITE_STRIPE_API_URL=/api/stripe-checkout  # Or your serverless function URL

# Monnify (for NGN - Local Alternative)
VITE_MONNIFY_PUBLIC_KEY=MK_TEST_your_monnify_public_key_here
VITE_MONNIFY_CONTRACT_CODE=your_contract_code_here
VITE_MONNIFY_TEST_MODE=true
```

## 📋 Gateway Setup

### 1. Paystack (NGN - Recommended for Nigeria)

1. Sign up at [Paystack](https://paystack.com)
2. Get your public key from the dashboard
3. Add to `.env`: `VITE_PAYSTACK_PUBLIC_KEY=pk_test_...`
4. For production: Use `pk_live_...`

**Features:**
- ✅ Cards, Bank Transfer, USSD
- ✅ Automatic receipt generation
- ✅ No backend required
- ✅ Already configured in `index.html`

### 2. Stripe (USD, EUR, GBP - International)

#### Option A: Serverless Function (Recommended)

**For Vercel:**
1. Install Stripe: `npm install stripe`
2. Deploy `api/stripe-checkout.ts` to your Vercel project
3. Add secret key: `STRIPE_SECRET_KEY=sk_test_...` in Vercel environment variables
4. Set `VITE_STRIPE_API_URL=/api/stripe-checkout` in `.env`

**For Netlify:**
1. Install Stripe: `npm install stripe @netlify/functions`
2. Deploy `netlify/functions/stripe-checkout.ts`
3. Add secret key: `STRIPE_SECRET_KEY=sk_test_...` in Netlify environment variables
4. Set `VITE_STRIPE_API_URL=/.netlify/functions/stripe-checkout` in `.env`

**Features:**
- ✅ Cards, Apple Pay, Google Pay
- ✅ International payments
- ✅ Automatic receipt generation
- ✅ Secure server-side processing

#### Option B: Stripe Payment Links (Simpler, but less flexible)

1. Create Payment Links in Stripe Dashboard
2. Use redirect approach (requires custom implementation)

### 3. Monnify (NGN - Alternative for Nigeria)

1. Sign up at [Monnify](https://monnify.com)
2. Get your API key and contract code
3. Add to `.env`:
   - `VITE_MONNIFY_PUBLIC_KEY=MK_TEST_...`
   - `VITE_MONNIFY_CONTRACT_CODE=...`
   - `VITE_MONNIFY_TEST_MODE=true`

**Features:**
- ✅ Cards, Bank Transfer, USSD
- ✅ Direct bank account debit
- ✅ No backend required

## 🚀 Quick Start

1. **Set up at least one gateway:**
   - For NGN: Configure Paystack (easiest)
   - For international: Configure Stripe + serverless function

2. **Add environment variables** to `.env`

3. **Deploy serverless function** (if using Stripe):
   ```bash
   # For Vercel
   vercel deploy
   
   # For Netlify
   netlify deploy
   ```

4. **Test the payment flow:**
   - Change currency to test different gateways
   - Use test cards (see Testing section)

## 🧪 Testing

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

### Test Mode

All gateways support test mode:
- **Paystack**: Use `pk_test_...` keys
- **Stripe**: Use `pk_test_...` and `sk_test_...` keys
- **Monnify**: Set `VITE_MONNIFY_TEST_MODE=true`

## 🔄 Payment Flow

1. User visits donate page
2. System detects currency (NGN/USD/EUR/GBP)
3. System auto-selects best gateway:
   - NGN → Paystack (default) or Monnify
   - USD/EUR/GBP → Stripe
4. User enters amount, name, email
5. User selects payment method (if multiple available)
6. User clicks "Proceed to Payment"
7. Payment gateway popup/redirect opens
8. User completes payment
9. Redirect to success page with transaction reference

## 🎨 Features

### Auto-Detection
- Currency detected from browser locale/timezone
- Gateway auto-selected based on currency
- Only available gateways shown

### Error Handling
- Clear error messages
- Validation before payment
- Graceful fallbacks

### Optimization
- Scripts loaded only when needed
- No redundant API calls
- Efficient gateway selection

## 🔒 Security

- ✅ Never commit `.env` file
- ✅ Use environment variables for all keys
- ✅ Use test keys during development
- ✅ Switch to live keys only in production
- ✅ Enable webhook verification (recommended)
- ✅ Validate all inputs server-side (Stripe)

## 📧 Receipts

All payment gateways automatically send email receipts. Ensure:
- Email notifications enabled in gateway dashboards
- Correct email addresses configured
- Receipt templates customized (optional)

## 🐛 Troubleshooting

### Paystack not loading
- ✅ Check script in `index.html`
- ✅ Verify public key is correct
- ✅ Check browser console for errors

### Stripe not working
- ✅ Verify serverless function is deployed
- ✅ Check `VITE_STRIPE_API_URL` is correct
- ✅ Verify `STRIPE_SECRET_KEY` is set in serverless environment
- ✅ Check serverless function logs

### Monnify not loading
- ✅ Verify API key and contract code
- ✅ Check test mode setting
- ✅ Ensure script loads correctly

### No payment methods available
- ✅ Check environment variables are set
- ✅ Verify gateway credentials are correct
- ✅ Check browser console for errors

## 📞 Support

For payment gateway issues:
- **Paystack**: support@paystack.com
- **Stripe**: support@stripe.com
- **Monnify**: support@monnify.com

For website issues: donate@thechildrightsfoundation.org

## 🎯 Best Practices

1. **Start with one gateway** (Paystack for NGN is easiest)
2. **Add Stripe** when you need international payments
3. **Test thoroughly** before going live
4. **Monitor transactions** in gateway dashboards
5. **Set up webhooks** for payment confirmation (recommended)
6. **Keep credentials secure** - never expose secret keys

## 📝 Notes

- The system is designed to be **lean** - no unnecessary dependencies
- Gateway selection is **automatic** - users don't need to understand technical details
- Error handling is **comprehensive** - users always know what's happening
- The code is **optimized** - scripts load only when needed

