import React from "react";
import earthLogo from "../img/white_earth_logo.png"

const Header = () => {
    return (
        <div className="header">
            <img src={earthLogo} alt="earth_logo" style={ {width: "25px", height: "25px"}} />
            <p>my travel journal</p>
        </div>
    )
}

export default Header;