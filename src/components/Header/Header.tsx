/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <View style={styles.buttonContent} >
                    <Text>
                        <Icon name="chevron-left" size={30} color="#900" />;
                    </Text>

                </View>

            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Memory Game</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(250,250,250,0.2)'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        position: 'absolute',
        zIndex: 1,
        margin: 10,

    },
    buttonContent: {
        height: 50,
        width: 50,
        padding: 10,
        borderRadius: 30,
        backgroundColor: 'rgba(255,255,255,0.4)',

    },
    text: {
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
        padding: 20,



    },
});

export default Header;
