import React from 'react';
import {TouchableHighlight, Text, StyleSheet,TextInput,Button,View} from 'react-native';


export default function Actionbar(props) {


  function check(){
     
      props.checkAnswer();
      props.nextQuestion();

  }
  function next(){
    props.nextQuestion();
  }
  function previous(){
    props.previousQuestion();

  }
  function finish(){
    props.checkFinish();
  }
 
  var buttonPrevious_disabled;
  var buttonNext_disabled;
    if(props.currentQuiz===0){
        buttonPrevious_disabled=true;
    }
    else{
       buttonPrevious_disabled=false;
    }
    if(props.currentQuiz===9){
       buttonNext_disabled=true;
    }
    else{
       buttonNext_disabled=false;
    }
  return(

    <View style={styles.container} >
      <View style={styles.row}>
        <Button  title="previo"  style={styles.button} onPress={previous} disabled={buttonPrevious_disabled}/> 
        <Button title= "next" style={styles.button} onPress={next} disabled={buttonNext_disabled}/>
        <Button title="check"   style={styles.button} onPress={check}/>
        <Button title= "fin"  style={styles.button} onPress={finish}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    justifyContent: "space-around",
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  row: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
  }
 
});