import React from "react";
import randImg1 from "../img/randImg1.jpg"
import randImg2 from "../img/randImg2.jpg"
import randImg3 from "../img/randImg3.jpg"
import randImg4 from "../img/randImg4.jpg"

const Galery = () => {
    return (
        <div className="gallery">
            <img src={randImg1} alt="randImg" />
            <img src={randImg2} alt="randImg" />
            <img src={randImg3} alt="randImg" />
            <img src={randImg4} alt="randImg" />
        </div>
    );
}

export default Galery;