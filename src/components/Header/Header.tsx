/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGameActive, decrementTimeInSeconds, setTimeInSeconds } from '../../store/gameSlice';
import useMedia from '../../hooks/useMedia';
import usePlayer from '../../hooks/usePlayer';
import { SOUNDS } from '../../../dataBase';

const Header = () => {

    const TOTAL_SECONDS = 50;

    const dispatch = useDispatch();
    const { gameIsActive, timeSeconds } = useSelector(state => state.myGame);
    const seconds = useRef(TOTAL_SECONDS);
    const media = useMedia(SOUNDS);
    const { playSound } = usePlayer();

    function triggerReRender() {
        return new Promise((resolve) => {
            const newTimer = setTimeout(() => {
                // resolve the promise after a delay of 1000 milliseconds (1 second)
                resolve(1);
                clearTimeout(newTimer);
            }, 1000);
        });
    }
    const handleGameStatus = () => {
        if (timeSeconds !== 0 && seconds.current !== 0) {

            dispatch(decrementTimeInSeconds());
            seconds.current -= 1;
            if (!gameIsActive) {
                startTimer();
            }
        }
        else {
            dispatch(toggleGameActive());
            playSound(media.lose);
        }
    };
    const startTimer = () => {


        triggerReRender().then(() => {
            // re-render the component hereº
            handleGameStatus();

        }).catch(err => {
            console.log({ err });
        });
    };



    const goBack = () => {

        dispatch(toggleGameActive());

        if (!gameIsActive) {
            seconds.current = TOTAL_SECONDS;
            dispatch(setTimeInSeconds(seconds.current));
            startTimer();
            // startTimer();
        }
        else {
            seconds.current = 0;
        }


    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goBack}>
                <View style={styles.buttonContent} >
                    <Text>
                        {
                            gameIsActive ? (<Icon name="pause-circle" size={30} color="#fafa" />)
                                : (<Icon name="play-circle" size={30} color="rgba(0,0,0,0.4)" />)
                        }
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
