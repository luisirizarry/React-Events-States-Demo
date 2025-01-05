import React from "react";

const Clicker = () => {
  const randomText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. `
  const fireLazers = () => {
    console.log('TheLazersHaveBeenFired');
  }
  return (
    <>
      <button onMouseOver={fireLazers}>CLICK ME</button>
      <textarea rows='2' value={randomText} readOnly onScroll={fireLazers}>
      </textarea>
    </>
    
  );
};

export default Clicker;