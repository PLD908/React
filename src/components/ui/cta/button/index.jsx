import React, { useState } from 'react';

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    color: 'white',
    backgroundColor: isHovered ? 'blue' : 'black',
    width: '25%',
    margin: '0 auto',
    padding: '10px 25px',
    boxShadow: "0.6em 0 1em 0",
    transition: "background-color 0.3s ease",
    borderRadius: "0.8em",
    cursor: 'pointer',
  };

  return (
    <div
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Connect
    </div>
  );
};

export default Button;