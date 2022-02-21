import React from 'react';
import {FaFacebook} from "react-icons/fa"
import logo from '../../assets/logo/logo.png';


function Header(props) {
  
  return (
    <header className="flex-row space-between px-1">
        <img src={logo} alt="animal control logo" />
        <a href="https://www.facebook.com/CRHSWildlife/?ref=page_internal">
        <FaFacebook/>
        </a>
        <button>Donate Now!</button>
        {props.children}
    </header>
  );
}

export default Header;