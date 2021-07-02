import React from 'react'
import "./product.css"
import { useStateValue } from "./StateProvider";
function product({ id, title, image, price, rating }){
// eslint-disable-next-line react-hooks/rules-of-hooks
const [{ basket }, dispatch] = useStateValue();
console.log("hi hwrcg",basket);
const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


    return (
        <div className="product">
        
        <div className="">
            <p>
                {title}
            </p>
            <p className="product__price">
                <small>$</small>
                <strong>
                    {price}
                </strong>
            </p>
            <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        </div>
        <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default product;
