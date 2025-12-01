# Complete Environment Variables Setup Guide

This guide walks you through obtaining **every** environment variable required for the CRF donation system.

## 📋 Table of Contents

1. [Bank Transfer Details](#bank-transfer-details)
2. [Contact Information](#contact-information)
3. [Paystack Setup (NGN)](#paystack-setup-ngn)
4. [Stripe Setup (USD/EUR/GBP)](#stripe-setup-usdeurgbp)
5. [Monnify Setup (NGN)](#monnify-setup-ngn)
6. [Serverless Function Setup](#serverless-function-setup)
7. [Quick Setup Checklist](#quick-setup-checklist)

---

## 🏦 Bank Transfer Details

### Purpose
Display bank account details for manual bank transfers.

### Variables Needed
- `VITE_BANK_ACCOUNT_NAME`
- `VITE_BANK_ACCOUNT_NUMBER`
- `VITE_BANK_NAME`

### How to Get Them

1. **Account Name**: The exact name on your bank account
   - Example: `Child Rights Foundation`
   - Get from: Your bank account documents or bank statement

2. **Account Number**: Your bank account number
   - Example: `1234567890`
   - Get from: Your bank account documents, checkbook, or online banking

3. **Bank Name**: The name of your bank
   - Example: `Access Bank`, `GTBank`, `First Bank`, `Zenith Bank`
   - Get from: Your bank account documents

### Setup Steps

1. Open your `.env` file
2. Add your bank details:
   ```env
   VITE_BANK_ACCOUNT_NAME=Child Rights Foundation
   VITE_BANK_ACCOUNT_NUMBER=1234567890
   VITE_BANK_NAME=Access Bank
   ```
3. **Note**: If these are not set, the bank transfer section will be hidden automatically

---

## 📧 Contact Information

### Purpose
Email address displayed for donation inquiries.

### Variable Needed
- `VITE_CONTACT_EMAIL`

### How to Get It

1. Use your organization's donation email
   - Example: `donate@thechildrightsfoundation.org`
   - Or: `info@thechildrightsfoundation.org`

### Setup Steps

```env
VITE_CONTACT_EMAIL=donate@thechildrightsfoundation.org
```

---

## 💳 Paystack Setup (NGN)

### Purpose
Process NGN (Nigerian Naira) payments locally.

### Variable Needed
- `VITE_PAYSTACK_PUBLIC_KEY`

### Step-by-Step Guide

#### 1. Create Paystack Account

1. Go to [https://paystack.com](https://paystack.com)
2. Click **"Sign Up"** or **"Get Started"**
3. Fill in your business details:
   - Business name: `Child Rights Foundation`
   - Email address
   - Phone number
   - Business type: `Non-Profit` or `NGO`
4. Verify your email address

#### 2. Complete Business Verification

1. Log in to [Paystack Dashboard](https://dashboard.paystack.com)
2. Go to **Settings** → **Business**
3. Complete your business profile:
   - Business registration documents
   - Bank account details (for payouts)
   - Identity verification
4. Wait for approval (usually 24-48 hours)

#### 3. Get Your API Keys

1. In Paystack Dashboard, go to **Settings** → **API Keys & Webhooks**
2. You'll see two keys:
   - **Public Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

#### 4. Test vs Live Keys

**Test Mode** (Development):
- Public Key: `pk_test_xxxxxxxxxxxxx`
- Use for testing payments
- No real money processed

**Live Mode** (Production):
- Public Key: `pk_live_xxxxxxxxxxxxx`
- Use for real payments
- Requires business verification approval

#### 5. Add to .env

```env
# For testing (development)
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_test_key_here

# For production (after approval)
VITE_PAYSTACK_PUBLIC_KEY=pk_live_your_actual_live_key_here
```

### Important Notes

- ✅ **Public Key** is safe to use in frontend code
- ❌ **Secret Key** should NEVER be in `.env` or frontend code
- 🔄 Switch to live keys only after testing and approval
- 📧 Paystack automatically sends receipts to donors

### Test Cards

Use these cards for testing:
- **Card**: `4084 0840 8408 4081`
- **CVV**: Any 3 digits
- **Expiry**: Any future date
- **PIN**: Any 4 digits

---

## 🌍 Stripe Setup (USD/EUR/GBP)

### Purpose
Process international payments in USD, EUR, and GBP.

### Variables Needed
- `VITE_STRIPE_PUBLIC_KEY`
- `VITE_STRIPE_API_URL`
- `STRIPE_SECRET_KEY` (for serverless function)

### Step-by-Step Guide

#### 1. Create Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click **"Start now"** or **"Sign up"**
3. Fill in your details:
   - Email address
   - Business name: `Child Rights Foundation`
   - Country: Your country
   - Business type: `Non-profit organization`
4. Verify your email address

#### 2. Complete Account Setup

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com)
2. Complete your business profile:
   - Business information
   - Bank account details (for payouts)
   - Identity verification
   - Tax information (if applicable)

#### 3. Get Your API Keys

1. In Stripe Dashboard, go to **Developers** → **API keys**
2. You'll see:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

#### 4. Test vs Live Keys

**Test Mode** (Development):
- Publishable Key: `pk_test_xxxxxxxxxxxxx`
- Secret Key: `sk_test_xxxxxxxxxxxxx`
- Use for testing

**Live Mode** (Production):
- Publishable Key: `pk_live_xxxxxxxxxxxxx`
- Secret Key: `sk_live_xxxxxxxxxxxxx`
- Use for real payments

#### 5. Add to .env

```env
# Frontend (public key)
VITE_STRIPE_PUBLIC_KEY=pk_test_your_actual_test_key_here

# API URL for serverless function
VITE_STRIPE_API_URL=/api/stripe-checkout
```

#### 6. Set Secret Key in Hosting Platform

**For Vercel:**
1. Go to your project → **Settings** → **Environment Variables**
2. Add: `STRIPE_SECRET_KEY` = `sk_test_your_secret_key_here`
3. Select environments: Production, Preview, Development

**For Netlify:**
1. Go to your site → **Site settings** → **Environment variables**
2. Add: `STRIPE_SECRET_KEY` = `sk_test_your_secret_key_here`
3. Set scope: All scopes

### Important Notes

- ✅ **Publishable Key** is safe for frontend
- ❌ **Secret Key** must ONLY be in serverless function environment
- 🔄 Stripe requires serverless function for checkout sessions
- 📧 Stripe automatically sends receipts

### Test Cards

Use these cards for testing:
- **Card**: `4242 4242 4242 4242`
- **CVV**: Any 3 digits
- **Expiry**: Any future date

---

## 🏦 Monnify Setup (NGN)

### Purpose
Alternative payment gateway for NGN payments (optional).

### Variables Needed
- `VITE_MONNIFY_PUBLIC_KEY`
- `VITE_MONNIFY_CONTRACT_CODE`
- `VITE_MONNIFY_TEST_MODE`

### Step-by-Step Guide

#### 1. Create Monnify Account

1. Go to [https://monnify.com](https://monnify.com)
2. Click **"Get Started"** or **"Sign Up"**
3. Fill in your business details:
   - Business name: `Child Rights Foundation`
   - Email address
   - Phone number
   - Business type: `Non-Profit`

#### 2. Complete Business Verification

1. Log in to [Monnify Dashboard](https://app.monnify.com)
2. Complete your business profile:
   - Business registration documents
   - Bank account details
   - Identity verification
3. Wait for approval

#### 3. Get Your API Credentials

1. In Monnify Dashboard, go to **Developers** → **API Credentials**
2. You'll see:
   - **API Key** (starts with `MK_TEST_` or `MK_LIVE_`)
   - **Secret Key** (keep this secure, not needed for frontend)
   - **Contract Code** (unique identifier)

#### 4. Test vs Live Mode

**Test Mode** (Development):
- API Key: `MK_TEST_xxxxxxxxxxxxx`
- Contract Code: Provided in dashboard
- Set `VITE_MONNIFY_TEST_MODE=true`

**Live Mode** (Production):
- API Key: `MK_LIVE_xxxxxxxxxxxxx`
- Contract Code: Provided in dashboard
- Set `VITE_MONNIFY_TEST_MODE=false`

#### 5. Add to .env

```env
# For testing
VITE_MONNIFY_PUBLIC_KEY=MK_TEST_your_actual_test_key_here
VITE_MONNIFY_CONTRACT_CODE=your_contract_code_here
VITE_MONNIFY_TEST_MODE=true

# For production
VITE_MONNIFY_PUBLIC_KEY=MK_LIVE_your_actual_live_key_here
VITE_MONNIFY_CONTRACT_CODE=your_contract_code_here
VITE_MONNIFY_TEST_MODE=false
```

### Important Notes

- ✅ **API Key** and **Contract Code** are safe for frontend
- ❌ **Secret Key** should never be in frontend code
- 🔄 Switch to live mode after testing and approval
- 📧 Monnify automatically sends receipts

---

## ⚙️ Serverless Function Setup

### Purpose
Handle Stripe checkout session creation securely on the server.

### Required Setup

#### Option 1: Vercel (Recommended)

1. **Deploy Function**
   - File location: `api/stripe-checkout.ts`
   - Vercel automatically detects and deploys it

2. **Set Environment Variable**
   - Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
   - Add: `STRIPE_SECRET_KEY` = `sk_test_your_secret_key_here`
   - Select: Production, Preview, Development

3. **Update .env**
   ```env
   VITE_STRIPE_API_URL=/api/stripe-checkout
   ```

#### Option 2: Netlify

1. **Deploy Function**
   - File location: `netlify/functions/stripe-checkout.ts`
   - Netlify automatically detects and deploys it

2. **Set Environment Variable**
   - Go to Netlify Dashboard → Your Site → **Site settings** → **Environment variables**
   - Add: `STRIPE_SECRET_KEY` = `sk_test_your_secret_key_here`
   - Set scope: All scopes

3. **Update .env**
   ```env
   VITE_STRIPE_API_URL=/.netlify/functions/stripe-checkout
   ```

#### Option 3: Custom Server

If using a custom server, update `VITE_STRIPE_API_URL` to your endpoint:
```env
VITE_STRIPE_API_URL=https://your-server.com/api/stripe-checkout
```

### Install Dependencies

For the serverless function, you'll need to install Stripe:

```bash
# For Vercel/Netlify
npm install stripe

# Or for Netlify Functions specifically
npm install stripe @netlify/functions
```

---

## ✅ Quick Setup Checklist

### Minimum Setup (NGN Only)

- [ ] Copy `.env.example` to `.env`
- [ ] Get Paystack public key
- [ ] Add `VITE_PAYSTACK_PUBLIC_KEY` to `.env`
- [ ] Add bank details (optional)
- [ ] Test payment flow

### Full Setup (International + Local)

- [ ] Copy `.env.example` to `.env`
- [ ] Get Paystack public key → Add to `.env`
- [ ] Get Stripe publishable key → Add to `.env`
- [ ] Get Stripe secret key → Add to hosting platform
- [ ] Deploy serverless function
- [ ] Get Monnify credentials (optional) → Add to `.env`
- [ ] Add bank details → Add to `.env`
- [ ] Test all payment flows

### Production Checklist

- [ ] Switch all keys to live/production keys
- [ ] Set `VITE_MONNIFY_TEST_MODE=false`
- [ ] Verify serverless function is deployed
- [ ] Test with real payment (small amount)
- [ ] Verify receipts are being sent
- [ ] Set up webhooks (recommended)
- [ ] Monitor transactions in dashboards

---

## 🔒 Security Best Practices

1. **Never commit `.env` file**
   - Add `.env` to `.gitignore`
   - Only commit `.env.example`

2. **Use Test Keys for Development**
   - Always test with test keys first
   - Only switch to live keys after thorough testing

3. **Protect Secret Keys**
   - Never put secret keys in `.env` or frontend code
   - Only use secret keys in serverless functions
   - Set secret keys in hosting platform environment variables

4. **Rotate Keys Regularly**
   - Change API keys periodically
   - If a key is compromised, regenerate immediately

5. **Monitor Transactions**
   - Regularly check payment gateway dashboards
   - Set up alerts for suspicious activity

---

## 🆘 Troubleshooting

### Payment Gateway Not Working

1. **Check Environment Variables**
   - Verify keys are correct in `.env`
   - Check for typos or extra spaces
   - Ensure you're using the right key type (test vs live)

2. **Check Browser Console**
   - Open developer tools (F12)
   - Look for error messages
   - Check network tab for failed requests

3. **Verify Gateway Status**
   - Check gateway dashboard for account status
   - Ensure account is verified and approved
   - Check for any account restrictions

### Serverless Function Not Working

1. **Check Deployment**
   - Verify function is deployed
   - Check function logs in hosting platform
   - Ensure environment variables are set

2. **Check API URL**
   - Verify `VITE_STRIPE_API_URL` is correct
   - Test endpoint manually with Postman/curl

3. **Check Dependencies**
   - Ensure Stripe package is installed
   - Check package.json for correct version

---

## 📞 Support Contacts

- **Paystack Support**: support@paystack.com
- **Stripe Support**: support@stripe.com
- **Monnify Support**: support@monnify.com
- **CRF Website Issues**: donate@thechildrightsfoundation.org

---

## 📝 Notes

- All environment variables starting with `VITE_` are exposed to the browser
- Secret keys should NEVER start with `VITE_`
- Test thoroughly before going live
- Keep backups of your API keys in a secure location
- Document which keys are for which environment (test/live)

---

**Last Updated**: December 2024
**Version**: 1.0

