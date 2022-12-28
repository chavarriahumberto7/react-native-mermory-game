/* eslint-disable prettier/prettier */
import {View, Text,TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
import React, { useState } from 'react';
import Sound from 'react-native-sound';
import {SOUNDS} from '../../dataBase/index';

export const PlayScreen = () => {

    const [tests, setState] = useState({['mp3 in bundle (looped)']: 'win' });
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
        },
        scrollContainer: {},
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 30,
            padding: 20,
            textAlign: 'center',
            backgroundColor: 'rgba(240,240,240,1)',
        },
        button: {
            fontSize: 20,
            backgroundColor: 'rgba(220,220,220,1)',
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'rgba(80,80,80,0.5)',
            overflow: 'hidden',
            padding: 7,
        },
        header: {
            textAlign: 'left',
        },
        feature: {
            flexDirection: 'row',
            padding: 10,
            alignSelf: 'stretch',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: 'rgb(180,180,180)',
            borderBottomWidth: 1,
            borderBottomColor: 'rgb(230,230,230)',
        },
    });

    const Button = ({ title, onPress }) => (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>{title}</Text>
        </TouchableOpacity>
    );

    const Header = ({ children, style }) => <Text style={[styles.header, style]}>{children}</Text>;

    const Feature = ({ title, onPress, buttonLabel = 'PLAY', status }) => (
        <View style={styles.feature}>
            <Header style={{ flex: 1 }}>{title}</Header>
            {status ? <Text style={{ padding: 5 }}>{resultIcons[status] || ''}</Text> : null}
            <Button title={buttonLabel} onPress={onPress} />
        </View>
    );

    const resultIcons = {
        '': '',
        pending: '?',
        playing: '\u25B6',
        win: '\u2713',
        fail: '\u274C',
    };




    function setTestState(testInfo, status) {
        setState({...tests, [testInfo.title]: status });
    }

    /**
     * Generic play function for majority of tests
     */
    function playSound(testInfo) {
        setTestState(testInfo, 'pending');

        const callback = (error, sound) => {
            if (error) {
                console.log('error', error.message);
                setTestState(testInfo, 'fail');
                return;
            }
            setTestState(testInfo, 'playing');
            // Run optional pre-play callback
            testInfo.onPrepared && testInfo.onPrepared(sound);
            sound.play(() => {
                // Success counts as getting to the end
                setTestState(testInfo, 'win');
                // Release when it's done so we're not using up resources
                sound.release();
            });
        };

        // If the audio is a 'require' then the second parameter must be the callback.
        if (testInfo.isRequire) {
            const sound = new Sound(testInfo.url, error => callback(error, sound));
        } else {
            const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
        }
    }


  return (
      <View style={styles.container}>
          <Header style={styles.title}>react-native-sound-demo</Header>
          <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
              {SOUNDS.map(testInfo => {
                  return (
                      <Feature
                          status={tests[testInfo.title]}
                          key={testInfo.title}
                          title={testInfo.title}
                          onPress={() => {
                              return playSound(testInfo);
                          }}
                      />
                  );
              })}
          </ScrollView>
          
      </View>
  );
};


export default PlayScreen;
