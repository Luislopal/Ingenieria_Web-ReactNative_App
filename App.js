import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './app/components/Home.js';
import Tictactoe from './app/components/TictactoeScreen.js';
import QuizApp from './app/components/QuizScreen.js';


import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.cabecera}>Mis juegos</Text>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} styles={styles.SafeArea}></Tab.Screen>
            <Tab.Screen name="TicTacToe" component={Tictactoe} styles={styles.SafeArea}></Tab.Screen>
            <Tab.Screen name="Quiz" component={QuizApp} styles={styles.SafeArea}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    paddingTop: StatusBar.currentHeight
  },
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'blue'
  },
  cabecera: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    padding: 10
  }
});
