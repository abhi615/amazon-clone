import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to='/'>
      <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link  to={!user && '/login'}>
        <div onClick={handleAuthenticaton} className="header_options">
          <span className="header_optionsone">Hello {!user ? 'Guest' : user.email}</span>
          <span className="header__optionsTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <div   className="header_options">
          <span className="header_optionsone">Returns</span>
          <span className="header_optionstwo">& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionsone">Yours</span>
          <span className="header_optionstwo">Prime</span>
        </div>
        <Link to="/checkout">
        <div className="header_optionbasket">
          <ShoppingBasketIcon />
          <span className="header_optionstwo header_count">{basket?.length}</span>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
