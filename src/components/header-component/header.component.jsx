import React from "react";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from "react-router-dom";
import './header.styles.scss'
import { auth } from "../../firebase/firebase.utils";
const Header = ({currentUser}) => {
  return (
     <div className="header">
        <Link to='/' className="logo-container">
           <Logo className="logo" />
        </Link>
        <div className="options">
           <Link to='/shop' className="option">shop</Link>
           <Link to='/contact' className="option">contact</Link>
           {
              currentUser ? 
                 <div  className="option" onClick={()=>{auth.signOut()}}>signout</div> :
                 <Link className="option" to='/sigin'>signin</Link>
           }
        </div>
        
    </div>
  );
};

export default Header;