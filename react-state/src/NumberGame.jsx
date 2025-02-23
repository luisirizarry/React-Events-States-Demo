import React, { useState } from "react";
import "./NumberGame.css";

/*
Follow along for <Number Game State> video as well
ass <Building on Number Game> video
*/

const NumberGame = (props) => {
  const genRandom = () => Math.floor(Math.random() * 10) + 1;

  const restart = () => {
    setTarget(genRandom())
    setGuess(0)
    setGuessCount(0)
  }
  const makeGuess = () => {
    setGuess(genRandom());
    setGuessCount(guessCount + 1);
  }
  const [guess, setGuess] = useState(genRandom());
  
  const [target, setTarget] = useState(genRandom());
  const [guessCount, setGuessCount] = useState(0);
  const isWinner = target === guess;
  return (
    <div className="NumberGame">
      <h1>Target Num: {target}</h1>
      <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess: {guess}</h1>
      <h4>Guess Number: {guessCount}</h4>
      {!isWinner && <button onClick={() => makeGuess()}>Generate Num</button>
      }

      <button onClick={restart}>New Game</button>
    </div>
  );
};

export default NumberGame;