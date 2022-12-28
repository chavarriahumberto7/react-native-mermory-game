/* eslint-disable prettier/prettier */

import { configureStore } from '@reduxjs/toolkit';

import gameSlice from './gameSlice';

const store = configureStore({
    reducer: {
        myGame: gameSlice,
    },
});

export default store;
