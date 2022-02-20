import React from 'react';
import logo from "./image/n.jpg";
import "./Header.scss";

const Header = () => {
    return (
        <div className='header text-white bg-warning'>
            <img src={logo} style={{marginLeft:"2rem"}} alt="hrllll" width="70" height="70" />
            <h1>Naqash</h1>
        </div>
    )
}

export default Header;
