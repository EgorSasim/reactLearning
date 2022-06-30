import React from "react";
import Description from "./Description.jsx";
import Galery from "./Galery.jsx";
import Logo from "./Logo.jsx";

const NavBar = () => {
    return (
        <div className="navBar">
            <Logo />
            <Galery />
            <Description />
        </div>
    );
}

export default NavBar;