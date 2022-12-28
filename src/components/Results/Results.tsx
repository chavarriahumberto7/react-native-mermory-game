/* eslint-disable prettier/prettier */
import { Text, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CircleButton from '../CircleButton/CircleBurron';
import { useSelector } from 'react-redux';


const Results = () => {
    const { goodMoves, totalMoves, timeSeconds } = useSelector(state => state.myGame);




    const slotLevel = <Text>1</Text>;
    const slotGoodMoves = <Text>{goodMoves}</Text>;
    const slotTotalMoves = <Text>{totalMoves}</Text>;
    const slotStyle = { fontSize: 30, color: 'white', fontWeight: 'bold' };
    return (
        <View style={styles.container} >
            <View style={styles.cardContainer}>
                <View style={styles.card}>

                    <CircleButton slot={slotLevel} slotStyle={slotStyle} />
                    <Text style={{ ...slotStyle, fontSize: 20 }}>Level</Text>
                </View>
                <View style={styles.card}>

                    <CircleButton slot={slotGoodMoves} slotStyle={slotStyle} />
                    <Text style={{ ...slotStyle, fontSize: 20 }}>Success</Text>

                </View>
                <View style={styles.card}>
                    <CircleButton slot={slotTotalMoves} slotStyle={slotStyle} />
                    <Text style={{ ...slotStyle, fontSize: 20 }}>Moves</Text>
                </View>
            </View>
            <View style={styles.timing}>
                <View><Text style={[slotStyle, styles.timeText]}>Time:</Text></View>
                <View>
                    <Text style={slotStyle}>{timeSeconds}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 5,
        marginTop: 5,
    },
    cardContainer: {
        flexDirection: 'row',
        height: 120,
        margin: 5,
        marginLeft: 5,
        justifyContent: 'space-around',
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    timeContainer: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',


    },
    timeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,



    },
    timing: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Results;


