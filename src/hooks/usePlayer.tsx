/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Sound from 'react-native-sound';

export const usePlayer = () => {

    const [tests, setState] = useState({ ['mp3 in bundle (looped)']: 'win' });

    function setTestState(testInfo, status) {
        setState({ ...tests, [testInfo.title]: status });
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


    return {
        playSound,
    };
};


export default usePlayer;
