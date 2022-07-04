import React from "react";

console.log("New card");
const Card = ({img, country, place, date, info}) => {
  
    return (
        <div className="card">
            <div className="img">
                <img src={img} alt="some_img" />
            </div>
            <div className="description">
                <p className="country">
                    &#9971;{country.toUpperCase()}
                </p>
                <p className="place">
                    {place}
                </p>
                <p className="date">
                    {date}
                </p>
                <p className="info">
                    {info}
                </p>
            </div>
        </div>
    )
}

export default Card;