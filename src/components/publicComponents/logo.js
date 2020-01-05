import React from 'react';
import logo from "../../images/logo.svg";
const Logo = (props) => {
    return (
        <>
            <img src={logo} className={`img-fluid w-100 h-auto ${props.className} `} alt="logo" style={{maxWidth:props.maxWidth}}/>
        </>
    );
};

Logo.defaultProps = {
    maxWidth:'50px'
}
export default Logo;
