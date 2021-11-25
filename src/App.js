/** @format */
import React, { useState, useEffect } from "react";
import Box from "./Box";
import Heading from './Heading';
import Button from '@material-ui/core/Button';




const initailValue = ["", "", "", "", "", "", "", "", ""];
const App = () => {
  const [Mark, setMark] = useState(initailValue);
  const [chance, setChance] = useState(false);
  const handelClick = (index) => {
    const string = Array.from(Mark);
    string[index] = chance ? "X" : "O";
    setChance(!chance);
    setMark(string);
  };

  const clearGame = () => {
    setMark(initailValue);
  };
  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`Ta da ! ${winner} won the Game !`);
    }
  }, [Mark]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log(
      "Class: App, Function: checkWinner ==",
      Mark[0],
      Mark[1],
      Mark[2],
    );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
    //   if (Mark[a] && Mark[a] === Mark[b] && Mark[a] === Mark[c]) {
      if (Mark[a] && Mark[a] === Mark[b] && Mark[a] === Mark[c]) {
        // console.log(Mark[a] && Mark[a] === Mark[b] && Mark[a] === Mark[c]);
        return Mark[a];
      }
    }
    console.log();
    return null;
  };

  return (
    <>
      <div className='container'>
        <Heading />
        <div className='gameContainer'>
          <div className='row'>
            <Box
              classname='border_bottom border_right'
              state={Mark[0]}
              click={() => handelClick(0)}
            />
            <Box
              classname='border_bottom border_right'
              state={Mark[1]}
              click={() => handelClick(1)}
            />
            <Box
              classname='border_bottom '
              state={Mark[2]}
              click={() => handelClick(2)}
            />
          </div>
          <div className='row'>
            <Box
              classname='border_bottom border_right'
              state={Mark[3]}
              click={() => handelClick(3)}
            />
            <Box
              classname='border_bottom border_right'
              state={Mark[4]}
              click={() => handelClick(4)}
            />
            <Box
              classname='border_bottom '
              state={Mark[5]}
              click={() => handelClick(5)}
            />
          </div>
          <div className='row'>
            <Box
              classname=' border_right '
              state={Mark[6]}
              click={() => handelClick(6)}
            />
            <Box
              classname=' border_right'
              state={Mark[7]}
              click={() => handelClick(7)}
            />
            <Box classname='' state={Mark[8]} click={() => handelClick(8)} />
          </div>
        </div>

        <Button onClick={clearGame} style={{marginTop:"3rem"}}>clear game</Button>
       
      </div>
    </>
  );
};

export default App;
