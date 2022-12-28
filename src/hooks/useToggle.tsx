/* eslint-disable prettier/prettier */
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addGoodMoves,
    addTotalMoves,
    setMatrix,
} from '../store/gameSlice';
import { SOUNDS } from '../../dataBase/index';
import usePlayer from './usePlayer';
import useMedia from './useMedia';



export const useToggle = () => {


    const { playSound } = usePlayer();
    const media = useMedia(SOUNDS);
    const { myGame: { gameIsActive, newMatrix } } = useSelector(state => state)

    const value1 = useRef(null);
    const value2 = useRef(null);

    const [toggleCard, setToggleCard] = useState(false);
    const isComputing = useRef(false);

    const dispatch = useDispatch();

    const updateNewMatrix = (
        { element }
    ) => {
        const cards = newMatrix;
        return cards.map((row) => row.map(card => {
            if (card.id === element.id) {
                return {
                    ...card,
                    isFlipped: !element.isFlipped,
                };
            }
            else {
                return card;
            }
        }));

    };

    const restoreMatrix = () => {
        const cards = newMatrix;

        return cards.map((row) => row.map(card => {

            if (card.id === value1.current.id) {
                return {
                    ...card,
                    isFlipped: value1.current.isFlipped,
                };
            }
            else if (card.id === value2.current.id) {
                return {
                    ...card,
                    isFlipped: value2.current.isFlipped,
                };
            }
            else {
                return card;
            }
        }));
    };

    const uncover = ({ element }) => {

        const buttonNode = element;


        if (!isComputing.current) {

            if (!toggleCard) {
                setToggleCard(!toggleCard);
                value1.current = buttonNode;
                // newMatrix.current = updateNewMatrix({ element, cards });
                dispatch(setMatrix(updateNewMatrix({ element })));
                playSound(media.flip);
            } else {
                value2.current = buttonNode;
                // newMatrix.current = updateNewMatrix({ element, cards });
                dispatch(setMatrix(updateNewMatrix({ element })));
                handleMove();
                addToMoves();

            }

        }
    };

    const addToMoves = () => {
        dispatch(addTotalMoves());

    };

    const addToWins = () => {
        dispatch(addGoodMoves());
    };

    function triggerReRender() {
        return new Promise((resolve) => {
            setTimeout(() => {
                // resolve the promise after a delay of 200 milliseconds (1 second)
                resolve(1);
            }, 200);
        });
    }


    const handleMove = () => {
        if (value2.current && value1.current) {

            if (value1.current.value === value2.current.value) {

                value1.current = null;
                value2.current = null;

                setToggleCard(false);
                addToWins();
                playSound(media.success2);
                isComputing.current = false;

            }
            else {
                isComputing.current = true;

                playSound(media.unsuccesa);
                triggerReRender().then(() => {
                    setToggleCard(false);
                    dispatch(setMatrix(restoreMatrix()));
                    isComputing.current = false;

                }).catch(err => {
                    console.log({ err });
                }).finally(() => {
                    value1.current = null;
                    value2.current = null;
                });

            }

        }
    };


    return {
        uncover,
    };
};
