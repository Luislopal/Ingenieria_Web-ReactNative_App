import React from 'react';
import { useState, useEffect } from 'react';
import {ScrollView, View, TouchableHighlight, Text, StyleSheet, Image, Button, StatusBar} from 'react-native';
import  { quizzes } from '../../mock-data.js';
import Game from './Game.jsx';
import Constants from "expo-constants";



export default function QuizApp(props) {


  const[score,setScore]=useState(0);
  const[finished,setFinished]=useState(false);
  const [currentQuiz, setCurrentQuiz]=useState(0);
  const [quizzes2, setQuizzes] = useState(quizzes);
  const [input, setInput] = useState(""); 
  const [answered, setAnswered]=useState(() => new Set());
  const [respuestas, setRespuestas]=useState(()=> new Map());
  
  
  async function fetchData() {
    try{
      setRespuestas(()=>new Map());


    const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=5263281f7361528dbdc4");
    const myjson = await res.json();
    console.log(myjson);
    setQuizzes(myjson);}
    catch(error){
    setQuizzes(quizzes);
    }
    
     }
     useEffect(() => {
     
      fetchData();
      
    }, []);


  function nextQuestion(){
    if(currentQuiz<quizzes2.length-1){
    setCurrentQuiz(currentQuiz+1);
    }

  }
  
  function checkAnswer(){
  
      if(respuestas.has(currentQuiz)){
      respuestas.delete(currentQuiz);
      }
  setRespuestas(new Map(respuestas.set(currentQuiz, input)));
     
  setAnswered(answered => new Set(answered).add(currentQuiz))
  
  if(currentQuiz<quizzes2.length-1 ){
  setCurrentQuiz(currentQuiz+1);
  }

  }
  function checkFinish(){
    setScore(0);

    [...respuestas].map((value) =>{
      if(value[1].toLowerCase()===quizzes2[value[0]].answer.toLowerCase()){

        setScore((score)=>score+1);
      }
      return 0;
    });
    setFinished(true);
    
    setAnswered(()=>new Set());
    setCurrentQuiz(0);
   
  }
  
  function previousQuestion(){
    if(currentQuiz>0){
    setCurrentQuiz(currentQuiz-1);
  }


  }
  
  function playagain(){
    setFinished(false);
    fetchData();
  }
    
     
if (finished ===false){
  return (
  <ScrollView>
    <View style={styles.game} >
      <Game  previousQuestion={previousQuestion} checkAnswer={checkAnswer} nextQuestion={nextQuestion} checkFinish={checkFinish} 
      quizzes={quizzes2} currentQuiz={currentQuiz} input={input}  score={score}  setInput={setInput} answered={answered}/>
    </View>
  </ScrollView>
  );
}
else{

  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.header}>Fin del Juego</Text>
        <Text style ={styles.header}>Su puntuación es: {score}</Text>
        <Button style={styles.playagain} onPress={()=>playagain()} title="Jugar de Nuevo"/>
      </View>
    </ScrollView>
  );
}

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 25,
    borderWidth: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },

  header: {
    fontSize: 32,
    textAlign:"center",
    backgroundColor: 'lightblue'
  },

  game:{
    padding: 10
  },

  playagain: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black'
  }

});
