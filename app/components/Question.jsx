import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


export default function Question(props) {

  return(
    <View>
       <Text style={styles.texto}>{props.question}</Text> 
    </View>
  );
    
}
const styles = StyleSheet.create({

  texto: {
    flex: 0.5,
    backgroundColor: "lightblue",
    borderWidth: 4,
    textAlign:"left",
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 25
  },
});