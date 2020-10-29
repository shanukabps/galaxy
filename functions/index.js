const functions = require('firebase-functions');
const express = require("express")
const cors = require("cors");
const { request, response } = require('express');
const stripe = require("stripe")("sk_test_51Hgs6pGKeDbvLZ1YSaYIsOzxzIMIe3u54oWsgqP7qdhQ9lQKnni3dgaebGnt5jhlEOdlMU2yGqUbmXyHNzUvp2LS00PDyhIDJr")



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//api

//api congig
const app = express()


//midelware
app.use(cors({ orgin: true }));
app.use(express.json())




//API routes

app.get('/', (request, response) => response.status(200).send('hello world'))


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('post awa')

    console.log("Payment Request Recived", total)
    try {

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'usd'
        })
        response.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
    } catch (error) {
        console.log('ERROR', error.message)
    }
})

//Lisent command

exports.api = functions.https.onRequest(app)
//firebase emulators:start
//end point
//http://localhost:5001/galaxy-79390/us-central1/api