import React from "react";

const Card = ({img, state, stars, workDesc, price, who}) => {

    return (
        <div className="card-container">
            <img src={img} alt="img1 " />
            <div className="state">{state}</div>
            <div className="stars">	&#10017;{stars}</div>
            <div className="work-description">{workDesc}</div>
            <div className="price_who">
                <p>From {price}/{who}</p>
            </div>
        </div>
    );
}

export default Card;