import React from "react";

const WelcomeUser = ({name}) => {
    return(
        <>
            <div>{name ? <h1>Hello {name}</h1> : <h1>You are not a user</h1>}</div>
        </>
    )
};

export default WelcomeUser;