import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';


export default function Author(props) {
 
  return(
    <View style={styles.author}>
      <View>
        <Image  style={styles.logo} source={{uri: props.photourl}}/> 
      </View>    
      <Text style={styles.textauthor}>{props.username}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  
  author: {
    justifyContent: "center",
    margin: 10,
    textAlign:"center",
    paddingLeft: 120
  },

  textauthor: {
    paddingTop: 5,
    fontWeight: 'bold',
    paddingLeft: 10
  }
  
});