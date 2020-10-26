import React from 'react'
import './Checkout.css'
import Subtotal from './../Subtotal/Subtotal';
import CheckoutProduct from './../CheckoutProduct/CheckoutProduct';
import { useStateValue } from './../contexApi/StateProvider';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();





    return (
        <div className="checkout">

            <div className="checkout_left">
                <img src="https://dsim.in/blog/wp-content/uploads/2017/01/samsung2.jpg" alt="" className="checkout_ad" />

                <div className="checkout_title">

                    <h4>Hello,  {user?.email}  </h4>
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


            <div className="checkout_right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
