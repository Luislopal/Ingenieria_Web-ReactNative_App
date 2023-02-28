import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Author from './Author.jsx';
import Actionbar from './Actionbar.jsx';
import {View, Image,StyleSheet} from 'react-native';


export default function Game(props) {

    function nextq(){
        props.nextQuestion();
    }
    function checka(){
        props.checkAnswer();
    }
    function previousq(){
        props.previousQuestion();
    }
    function seti(input){
        props.setInput(input);
    }
    function checkf(){
        props.checkFinish();
    }
   
    var username;
    try{
    var author = props.quizzes[props.currentQuiz].author;
        if (author.profileName){
            username = author.profileName;
        }
        else if (author.username){
             username = author.username;
        }
        else{
            username = "Anónimo";
        }

    } catch (error){
        username ="Anónimo";
    }

    var url="https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg";

    var quizimg= props.quizzes[props.currentQuiz].attachment ? props.quizzes[props.currentQuiz].attachment.url : url;
  
  return (
    <View >
        <View style={styles.juego}>
            <Image  source={{uri: quizimg}} alt="No Imagen"  style={styles.imagen} resizeMode="contain"/>
        </View>
        <Question question={props.quizzes[props.currentQuiz].question} index={props.currentQuiz}/>
        <Answer setInput={seti} input={props.input}/>
        <Author username={username} photourl={props.quizzes[props.currentQuiz].author ? props.quizzes[props.currentQuiz].author.photo.url ? props.quizzes[props.currentQuiz].author.photo.url : url : url}/>
        <Actionbar quiz={props.quiz}  nextQuestion={nextq} checkAnswer={checka} previousQuestion={previousq} checkFinish={checkf} currentQuiz={props.currentQuiz} answered={props.answered}/>
    </View>
  );
}

const styles = StyleSheet.create({
    juego: {
      justifyContent: 'center',
      alignItems: 'center',
    },
   
    imagen: {
        width: 350,
        height: 350
    }
});