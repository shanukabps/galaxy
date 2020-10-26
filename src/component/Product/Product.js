import React from 'react'
import './Product.css'
import { useStateValue } from './../contexApi/StateProvider';

function Product({ id, title, cat, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log('basket data--->', basket)
    const addToBasket = () => {
        //dispatch to idemt to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }


    return (
        <div className="product">

            <div className="product_info">
                <p>{title}</p>
                <p>catogory</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>&#11088;</p>
                        ))}

                </div>

            </div>
            <img src={image} alt="" className="product_image" />


            <button className="product_cart" onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
