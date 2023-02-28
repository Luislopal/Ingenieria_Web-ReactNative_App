import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function Home() {

    return (
        <View style={styles.imagen}>
            <Text style={styles.titulo}>Bienvenido a la página principal de mini-juegos de React.</Text>
            <Text style={styles.texto}>En esta página podrás jugar a diferentes juegos.</Text>
            <Text style={styles.imagen}>Haz click en la pestaña del juego al que deseas jugar.</Text>
            <View>
                <Image source={require('./descarga.jpeg')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    titulo: {
        textAlign: 'center',
        fontSize: 40,
        flex: 1
    },
    texto: {
        textAlign: 'center',
        fontSize: 25,
        flex: 0.4
    },
    imagen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.7
    }
})