import React from 'react'
import "./Home.css";
import  Product from './product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/612LVwrROPL._SX1500_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6113lMeZpWS._SL1200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/41ui6ON5ULL._SY300_SX300_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71TM5wAEvOS._SL1500_.jpg"
          />
        </div>
      </div>
    </div>

    )
}

export default Home
