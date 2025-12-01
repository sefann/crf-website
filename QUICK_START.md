# Quick Start Guide - Payment Setup

## 🚀 Fast Setup (5 Minutes)

### Step 1: Copy Environment File

```bash
# Copy the example file to create your .env
cp .env.example .env
```

### Step 2: Minimum Setup (NGN Only)

For **local NGN payments only**, you only need Paystack:

1. **Get Paystack Key** (2 minutes):
   - Go to [Paystack Dashboard](https://dashboard.paystack.com)
   - Sign up or log in
   - Go to **Settings** → **API Keys & Webhooks**
   - Copy your **Public Key** (starts with `pk_test_`)

2. **Add to .env**:
   ```env
   VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_actual_key_here
   ```

3. **Test it**:
   ```bash
   npm run dev
   ```
   - Visit `http://localhost:5173/donate`
   - Try a test payment with card: `4084 0840 8408 4081`

### Step 3: Full Setup (International + Local)

For **international payments** (USD, EUR, GBP), add Stripe:

1. **Get Stripe Keys** (5 minutes):
   - Go to [Stripe Dashboard](https://dashboard.stripe.com)
   - Sign up or log in
   - Go to **Developers** → **API keys**
   - Copy your **Publishable key** (starts with `pk_test_`)
   - Copy your **Secret key** (starts with `sk_test_`)

2. **Add to .env**:
   ```env
   VITE_STRIPE_PUBLIC_KEY=pk_test_your_actual_key_here
   VITE_STRIPE_API_URL=/api/stripe-checkout
   ```

3. **Deploy Serverless Function**:
   - **Vercel**: Deploy `api/stripe-checkout.ts`
   - **Netlify**: Deploy `netlify/functions/stripe-checkout.ts`
   - Add `STRIPE_SECRET_KEY` in hosting platform environment variables

4. **Test it**:
   - Change currency to USD/EUR/GBP
   - Try a test payment with card: `4242 4242 4242 4242`

### Step 4: Add Bank Details (Optional)

If you want to show bank transfer option:

```env
VITE_BANK_ACCOUNT_NAME=Child Rights Foundation
VITE_BANK_ACCOUNT_NUMBER=1234567890
VITE_BANK_NAME=Access Bank
```

**Note**: If bank details are not set, the bank transfer section will be hidden automatically.

---

## 📋 Environment Variables Checklist

### Required for NGN Payments
- [ ] `VITE_PAYSTACK_PUBLIC_KEY`

### Required for International Payments
- [ ] `VITE_STRIPE_PUBLIC_KEY`
- [ ] `VITE_STRIPE_API_URL`
- [ ] `STRIPE_SECRET_KEY` (in hosting platform)

### Optional
- [ ] `VITE_BANK_ACCOUNT_NAME`
- [ ] `VITE_BANK_ACCOUNT_NUMBER`
- [ ] `VITE_BANK_NAME`
- [ ] `VITE_CONTACT_EMAIL`
- [ ] `VITE_MONNIFY_PUBLIC_KEY` (alternative NGN gateway)
- [ ] `VITE_MONNIFY_CONTRACT_CODE`
- [ ] `VITE_MONNIFY_TEST_MODE`

---

## 📚 Detailed Guides

- **Complete Setup**: See [ENV_SETUP_GUIDE.md](./ENV_SETUP_GUIDE.md)
- **Payment Integration**: See [PAYMENT_SETUP.md](./PAYMENT_SETUP.md)

---

## ✅ Testing

### Test Cards

**Paystack (NGN)**:
- Card: `4084 0840 8408 4081`
- CVV: Any 3 digits
- Expiry: Any future date
- PIN: Any 4 digits

**Stripe (USD/EUR/GBP)**:
- Card: `4242 4242 4242 4242`
- CVV: Any 3 digits
- Expiry: Any future date

---

## 🆘 Need Help?

1. Check [ENV_SETUP_GUIDE.md](./ENV_SETUP_GUIDE.md) for detailed instructions
2. Check browser console for errors (F12)
3. Verify environment variables are set correctly
4. Contact: donate@thechildrightsfoundation.org

---

**That's it!** Your payment system is ready. 🎉

