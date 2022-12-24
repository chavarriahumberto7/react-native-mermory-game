/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View,Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Card from './src/components/Card';
import FlipCard from './src/components/FlipCard';
import PlayingScreen from './src/screens/PlayingScreen';
import PlayScreen from './src/screens/PlayScreen';

const styleImage = { height: '95%', width: '95%' }
const imageSource= require('./assets/images/icons/butterfly.png')
const App = () => (

 
    
  <SafeAreaView style={styles.sectionContainer}>
    <PlayingScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
