/* eslint-disable prettier/prettier */
import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createMatrix } from '../../utils/createElements';
import RenderGrid from '../RenderGrid/RenderGrid';
import { useDispatch } from 'react-redux';
import { setMatrix } from '../../store/gameSlice';
const MainTable = () => {
    // const [gridMatrix, setGridMatrix] = useState();
    // const { gameIsActive } = useSelector(state => state.myGame)
    const dispatch = useDispatch();

    useEffect(() => {

        // todo this is the matrix type
        // * check matrix type on here
        let matrixType = 4;
        // const matrix = createMatrix({ matrixType });
        // setGridMatrix(matrix);
        dispatch(setMatrix(createMatrix({ matrixType })));


    }, []);


    return (
        <View style={styles.container}>
            {/* <Text>Testing</Text> */}
            {/* <RenderGrid matrix={gridMatrix} /> */}
            <RenderGrid />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingTop: 20,
        paddingBottom: 20,
    },
});


export default MainTable;
