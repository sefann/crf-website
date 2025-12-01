// Vercel Serverless Function for Stripe Checkout
// Deploy this to: api/stripe-checkout.ts
// Install: npm install stripe @vercel/node

import type { VercelRequest, VercelResponse } from '@vercel/node'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { amount, currency, email, name, metadata, success_url, cancel_url } = req.body

    // Validate required fields
    if (!amount || !currency || !email || !name) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: 'Donation to Child Rights Foundation',
              description: `Donation from ${name}`,
            },
            unit_amount: amount, // Already in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        donor_name: name,
        ...metadata,
      },
      success_url: success_url || `${process.env.VERCEL_URL || 'http://localhost:3000'}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${process.env.VERCEL_URL || 'http://localhost:3000'}/donate?canceled=true`,
    })

    return res.status(200).json({ sessionId: session.id })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return res.status(500).json({ error: error.message || 'Failed to create checkout session' })
  }
}

