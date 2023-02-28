import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import {Text, View} from 'react-native';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
// import MyButton from '../../my_button';



export default function Tictactoe(props) {

  const PLAYERX = "Jugador 1 - Xs";
  const PLAYER0 = "Jugador 2 - 0s";
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
    ]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/ccr5");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setMoves(myjson.moves);
      setValues(myjson.values);
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1); 
  }

  function reset(){
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  
  let text = "Turno de " + turn;


  return (
      <View style={{flex:1, margin:30, textAlign:'center'}}>
        <Header text={text}/>
        <Board values={values}  appClick={appClick}/>
        <Text style={{fontSize: 25, padding: 30, textAlign: 'center'}}>Número de movimientos: {moves}</Text>
        <Reset reset={reset}></Reset>
      </View>
  );
}