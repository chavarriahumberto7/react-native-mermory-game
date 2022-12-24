/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Footer, Header, MainTable, Results } from '../components';

const PlayingScreen = () => (
    <View>
        <Header />
        <Results />
        <MainTable />
        <Footer />
    </View>
);

export default PlayingScreen;

const styles = StyleSheet.create({});
