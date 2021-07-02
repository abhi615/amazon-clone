/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import "./subtotal.css";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import Currencyformat from "react-currency-format";
import {useStateValue} from './StateProvider';

function subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
  
  return (
    <div class="subtotal">
      <Currencyformat
        renderText={(value) => (
          <>
            <p>
            Subtotal ({basket.length} items) <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              this oder contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator="true"
        prefix={"$"}
      />
      <button   onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>

  );
}

export default subtotal;
