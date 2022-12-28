/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Footer, Header, MainTable, Results } from '../components';
import PlayScreen from './PlayScreen';


const PlayingScreen = () => {
    return (

        <View style={styles.container}>
            <Header />
            <Results />
            <MainTable />
            <Footer />
        </View>
    );
};

export default PlayingScreen;

const styles = StyleSheet.create({
    container: {

    },
});
