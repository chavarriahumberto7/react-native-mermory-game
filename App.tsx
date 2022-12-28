/* eslint-disable react-native/no-inline-styles */
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
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,

} from 'react-native';
import PlayingScreen from './src/screens/PlayingScreen';
import { Provider } from 'react-redux';
import store from './src/store/store';
import LinearGradient from 'react-native-linear-gradient';
const App = () => (
  <LinearGradient
    colors={['rgb(63, 94, 251)', 'rgba(252, 70, 107, 1)']}
    style={{
      flex: 1,
      color: 'white',
    }}>
    <SafeAreaView style={styles.sectionContainer}>
      <Provider store={store}>
        <PlayingScreen />
      </Provider>
    </SafeAreaView>
  </LinearGradient>
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
