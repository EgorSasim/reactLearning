import React from "react";
import reactLogo from "../../images/react-logo.png"

const Header = function() {
    return (
        <div className="headerContainer">
            <div className="logo-container">
                <img src={reactLogo} width="200px" height="200px" alt="fuck off" />
                <div className="react_facts">React facts</div>
            </div>

            <div className="project_number">Project 2</div>
        </div>
    );
}

export default Header;