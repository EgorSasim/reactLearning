import React from "react";

const Info = ({props}) => {
    return(
        <div className="info">
            <div className="name">{props.name}</div>
            <div className="job">{props.job}</div>
            <div className="website">{props.website}</div>
            <button className="mail">Email</button>
        </div>
    );
}

export default Info;