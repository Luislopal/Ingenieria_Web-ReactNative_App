import React from 'react';
import {TouchableHighlight, Text, StyleSheet,TextInput,Button,View} from 'react-native';





export default function Answer(props) {

  
  return(
    <View style={styles.answer}>
      <View>
        <Text>Respuesta:</Text>
      </View>
      <TextInput  style={styles.input}  placeholder="Escribe aquí tu respuesta"  value={props.input}  onChangeText={e => props.setInput(e)}/>
    </View>
  );
}
const styles = StyleSheet.create({
  answer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    backgroundColor: 'lightblue',
    borderWidth: 2
  },
  input: {
    height: 50,
    width: 200,
    margin: 20,
    borderWidth: 2,
    padding: 10,
  },
});
