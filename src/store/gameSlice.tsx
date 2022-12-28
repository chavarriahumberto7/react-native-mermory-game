/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';


export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        goodMoves: 0,
        totalMoves: 0,
        timeSeconds: 10,
        gameIsActive: false,
        newMatrix: null,
        node1: null,
        node2: null,
    },

    reducers: {
        addGoodMoves: (state) => {
            state.goodMoves += 1;

        },
        addTotalMoves: (state) => {
            state.totalMoves += 1;
        },
        setTimeInSeconds: (state, value) => {
            state.timeSeconds = value.payload;
        },
        decrementTimeInSeconds: (state) => {
            state.timeSeconds -= 1;
        },
        toggleGameActive: (state) => {
            if (state.gameIsActive) {
                state.goodMoves = 0;
                state.totalMoves = 0;
            }
            state.gameIsActive = !state.gameIsActive;
        },
        resetNodes: (state) => {
            state.node1 = null;
            state.node2 = null;
        },
        setNode1: (state, value) => {
            state.node1 = value.payload;
        },
        setNode2: (state, value) => {
            state.node2 = value.payload;
        },
        setMatrix: (state, value) => {
            state.newMatrix = value.payload;
        },

    },
});

export const {
    addGoodMoves,
    addTotalMoves,
    setTimeInSeconds,
    decrementTimeInSeconds,
    toggleGameActive,
    setNode1,
    setNode2,
    resetNodes,
    setMatrix,
} = gameSlice.actions;

export default gameSlice.reducer;
