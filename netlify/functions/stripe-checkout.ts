// Netlify Serverless Function for Stripe Checkout
// Deploy this to: netlify/functions/stripe-checkout.ts
// Or use Vercel: api/stripe-checkout.ts

import { Handler } from '@netlify/functions'

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const body = JSON.parse(event.body || '{}')

    const { amount, currency, email, name, metadata, success_url, cancel_url } = body

    // Validate required fields
    if (!amount || !currency || !email || !name) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      }
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
      success_url: success_url || `${process.env.URL || 'http://localhost:8888'}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${process.env.URL || 'http://localhost:8888'}/donate?canceled=true`,
    })

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error: any) {
    console.error('Stripe error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || 'Failed to create checkout session' }),
    }
  }
}

