import React from 'react';
import {View, StyleSheet, Text} from 'react-native'


export default function Header(props) {

    return (
      <View>
          <Text style={styles.header}>Turno: {props.text}</Text>
      </View>
    );
}

const styles = StyleSheet.create ({
  header: {
    textAlign: 'center',
    fontSize: 20,
    padding: 30,
  }
});