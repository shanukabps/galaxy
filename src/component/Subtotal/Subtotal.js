import React, { useState } from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './../contexApi/StateProvider';
import { getBasketTotal } from '../contexApi/reducer';



function Subtotal() {


    const [{ basket }, dispatch] = useStateValue();


    return (

        <div className="subtotal">
            <CurrencyFormat
                renderText={value => (
                    <div className="subtotal_infor">
                        {/* homework */}
                        <p>Subtotal   (0  item): <strong>{basket.length}</strong>       </p>
                        <p>Subtotal    : <strong>{value}</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                        This order contains a gift
                        </small>

                    </div>
                )}
                decimalScale={2}
                // hw  time6.47
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}


            />
            <button>Process to Checkout</button>

        </div>

    )
}

export default Subtotal
