import React from "react";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import './header.styles.scss'
const Header = () => {
  return (
     <div className="header">
        <Link to='/' className="logo-container">
           <Logo className="logo" />
        </Link>
        <div className="options">
           <Link to='/shop' className="option">shop</Link>
           <Link to = '/contact' className="option">contact</Link>
        </div>
        
    </div>
  );
};

export default Header;