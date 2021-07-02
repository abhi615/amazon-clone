/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./checkout.css";
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutproduct";
import { useStateValue } from "./StateProvider";
function checkout() {
    const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title"> Shopping Basket</h2>
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default checkout;
