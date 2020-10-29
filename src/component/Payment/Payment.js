import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './../contexApi/StateProvider';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './../CheckoutProduct/CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../contexApi/reducer';
import { useEffect } from 'react';
import axios from '../../axios'


function Payment() {
    const history = useHistory();
    const [{ basket, user }, disatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();


    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")


    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //currency aka anuwa guna karann wenawa basket akat aha peththen
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            }).then(response => setClientSecret(response.data.clientSecret)).catch(error =>
                console.log("error", error.message))

        }
        getClientSecret()
    }, [basket])









    const handelSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmAlipayPayment(clientSecret, {
            paymet_method: {
                card: elements.getElement(CardElement)
            }
        }).then((response) => {
            ///paymentIntent=payment confrimation
            response.send('aaaa')
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            history.replace('/orders')
        }).catch(error => console.log(error.message))

    }


    const handelChange = event => {

        //Lisent for change in card eliment
        // and display error as customer type their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    console.log('the secret is   ', clientSecret)
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>

                    CHECKOUT ( {
                        <Link to="/checkout">{basket?.length} items</Link >
                    })
                </h1>
                <div className="payment_section">

                    <div className="payment_title">
                        <h4>Dilivery Address</h4>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>123 React lane</p>
                        <p>maho</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h4>Review item and delivery</h4>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h4>Payment Method</h4>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handelSubmit}>

                            <CardElement onChange={handelChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={value => (

                                        <h3>Order Total: {value}</h3>

                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}


                                />

                                <button disabled={processing || disabled || succeeded}>
                                    <span> {processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
