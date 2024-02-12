import React from 'react';
import Button from "../cta/button";

const Card = ({name, job, image}) => {
    const cardStyle = {
        backgroundColor: "white",
        padding: "1.5em",
        boxShadow: "0 0 1em 0",
        borderRadius: "0.8em",
        display: "inline-block",
        width: "20%",
        margin: "1em",
        marginTop: "2em",
    };

    return (
        <div style={cardStyle}>
            <img src={image} alt="Person is here" />
            <h2>{name}</h2>
            <p>{job}</p>
            <Button />
        </div>
    )   
};

export default Card;