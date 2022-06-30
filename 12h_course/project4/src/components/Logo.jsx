import React from "react";
import logoImg from "../img/logo.png"

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImg} alt="logoImg" className="logo-img"/>
            <div className="brand-name">airbnb</div>
        </div>
    );
}

export default Logo;