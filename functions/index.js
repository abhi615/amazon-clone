const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    // eslint-disable-next-line max-len
    'sk_test_51J837WSF2rIM6UGOolZBhDRveirTH0xPg6tK91ANTOX5TXIE61nCpoqEZb3bdTXlpp2heg0PnuGTOOoH7nRmEdf900wj5OrAlI',
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
    description: 'payment confirmed',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api


