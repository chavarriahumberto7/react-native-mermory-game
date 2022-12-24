/* eslint-disable prettier/prettier */
import React, {useRef, useState,cloneElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
    Animated,
} from 'react-native';

const FlipCard = ({
    width = 100, height = 100,
    slot1,
    stylesSlot1,
    slot2, stylesSlot2,
    onPress,

}) => {
  const [isFlipped, setIsFlipped] = useState(false);

    const animateY = useRef(new Animated.Value(0));

    const flipCard = () => {
        Animated.timing(animateY.current, {
            duration: 300,
            toValue: isFlipped ? 0 : 180,
            useNativeDriver: true,
        }).start(() => {
            onPress();
            setIsFlipped(!isFlipped);
        });
    };

  const frontAnimatedStyle = {
    transform: [
      {
        rotateY: animateY.current.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

    const backAnimatedStyle = {
    transform: [
      {
        rotateY: animateY.current.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg'],
        }),
      },
    ],
  };
    return (
        <TouchableOpacity onPress={flipCard} style={{...styles.cardContainer,width:width,height:height}}>
                 <View style={[styles.cardContainer]}>
                <Animated.View style={[styles.card, frontAnimatedStyle]}>
                    {cloneElement(slot1,{style: stylesSlot1})}
                    </Animated.View>
                    <Animated.View style={[styles.card, styles.back,backAnimatedStyle]}>
                    {cloneElement(slot2,{style:stylesSlot2})}
                    </Animated.View>
                </View>
            </TouchableOpacity>
    );
};

FlipCard.defaultProps = {
    slot1: <Text>Front Side</Text>,
    slot2: <Text>Back Side</Text>,
    stylesSlot1: { width: '100%' },
    stylesSlot2: { width: '100%' },
    onPress: () => console.log('Flipping card'),
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        position: 'relative',
    },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'#f1f1f1',
    },
    back: {
        position: 'absolute',
        top: 0,
        left: 0,
        backfaceVisibility:'hidden',

    },
});

export default FlipCard;
