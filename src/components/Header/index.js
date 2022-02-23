import React from 'react';
import {FaFacebook} from "react-icons/fa"
import logo from '../../assets/logo/logo.png';
import { IconContext } from "react-icons";
import "./style.css"


function Header(props) {
  
  return (
    <header className="flex-row">
      <div>
        <img src={logo} className="logo" alt="animal control logo" />
      </div>
      <div>
        {props.children}
      </div>
      <div className='header-button'>
        <IconContext.Provider value={{ className: 'icons', color: "white", size: "45px"}}>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/CRHSWildlife/?ref=page_internal"><FaFacebook/></a>
        </IconContext.Provider>
        <a class="btn" target="_blank" rel="noreferrer" href="https://donatenow.networkforgood.org/crhswildlife">DONATE NOW!</a>
      </div>
    </header>
  );
}

export default Header;