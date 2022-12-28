/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { cloneElement } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS as Colors } from '../../../dataBase';

const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };

const CircleButton = ({ slot, slotStyle, size, circle, onPress }) => {

    const renderCircle = (style) => {

        return (
            <LinearGradient start={start} end={end} colors={Colors.linearGradient} size={size} circle={size}
                style={{
                    ...style,
                    width: circle ? circle : 70,
                    height: circle ? circle : 70,
                    borderRadius: circle ? circle / 2 : 70 / 2,


                }}
            />);

    };

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View
                style={{ ...style.container, width: size ? size : 78, height: size ? size : 78 }}
            >
                {renderCircle({

                    opacity: 0.5,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,



                })}
                {renderCircle(
                    {
                        opacity: 0.5,
                        position: 'absolute',
                        right: 0,
                        bottom: 0,
                    }
                )}
                {renderCircle({
                    opacity: 0.5,
                    position: 'absolute',
                    top: 0,
                })}


                {slot && <View style={style.container}>

                    {cloneElement(slot, { style: slotStyle })}
                </View>
                }
            </View>
        </TouchableOpacity>
    );
};

CircleButton.defaultProps = {
    onPress: () => console.log('clicking button'),
    slot: <Text>Value</Text>,
    slotStyle: { width: '100%' },

};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'
    },
});



export default CircleButton;
