/* eslint-disable prettier/prettier */
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import FlipCard from './FlipCard';
import { ICONS } from '../../../dataBase';
import { useToggle } from '../../hooks/useToggle';
import { useSelector } from 'react-redux';

export const RenderGrid = () => {

    const cardWidthHeight = useRef({ width: 70, height: 80 });

    const { uncover } = useToggle();
    const { newMatrix } = useSelector(state => state.myGame)

    const { setIcons1: setIcons } = ICONS;
    const frontIcon = setIcons.filter(el => el.title === 'diamonds');
    const width = Dimensions.get('screen').width;


    const calcCardDimentions = () => {
        const newWidth = Math.floor(Math.floor(width) / newMatrix?.length) - (5 * newMatrix?.length);
        const newHeight = Math.ceil(newWidth * 1.14);
        cardWidthHeight.current = { width: newWidth, height: newHeight };

    };

    const handleCardFlip = (element) => {

        uncover({ element });
    };

    useEffect(() => {

        if (newMatrix) {
            calcCardDimentions();
        }
    }, [cardWidthHeight]);

    return (
        <View style={styles.tableContainer}>
            {
                newMatrix && <View style={[styles.tableContainer]} >
                    {
                        newMatrix.map((row, rowInd) => {

                            return (
                                <View key={rowInd} style={styles.tableRow} >
                                    {
                                        row.map((card, index) => {

                                            const slot1Style = { height: '104%', width: '104%' };
                                            const slot2Style = { height: '95%', width: '95%' };
                                            const icon = card.url;
                                            const isFlipped = card.isFlipped;

                                            return (
                                                <View key={index} style={styles.tableCell}>
                                                    <FlipCard width={cardWidthHeight.current.width} height={cardWidthHeight.current.height}
                                                        slot1={<Image source={frontIcon[0].url} />}
                                                        slot2={<Image source={icon} />}
                                                        stylesSlot2={slot2Style}
                                                        stylesSlot1={slot1Style}
                                                        element={card}
                                                        isFlipped={isFlipped}
                                                        onPress={() => { handleCardFlip(card); }}

                                                    />

                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            );
                        })
                    }
                </View>
            }

        </View >
);
};
const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    tableRow: {
        // flex: 1,
        flexDirection: 'row',

    },
    tableCell: {
        margin: 5,
        borderRadius: 5,
    },

});
export default RenderGrid;
