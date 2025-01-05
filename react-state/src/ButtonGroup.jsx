import React from "react";

const ButtonGroup = () => {
  const printColor = (color) => {
    console.log(`You clicked: ${color.toUpperCase()}`)
  };

  return (
    <div>
      <button onClick={() => printColor('Red')}>RED</button>
      <button onClick={() => printColor('Yellow')}>YELLOW</button>
      <button onClick={() => printColor('Green')}>GREEN</button>
    </div>
  )
};

export default ButtonGroup;