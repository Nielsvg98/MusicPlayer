import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

const PlayControls = ({
                          paused,
                          shuffleOn,
                          repeatOn,
                          onPressPlay,
                          onPressPause,
                          onBack,
                          onForward,
                          onPressShuffle,
                          onPressRepeat,
                          forwardDisabled,
                      }) => (
    <View style={styles.container}>
        <View style={{width: 40}}/>
        <TouchableOpacity onPress={onBack}>
            <Image style={{width: 24, height: 24}} source={require('../images/back.png')}/>
        </TouchableOpacity>
        <View style={{width: 20}}/>
        {!paused ?
            <TouchableOpacity style={{
                shadowOffset: {width: 0, height: 0,},
                shadowColor: 'black',
                shadowOpacity: 0.15,
                shadowRadius: 15
            }} onPress={onPressPause}>
                <View style={styles.playButton}>
                    <Image style={{marginLeft: 5, width: 30, height: 30}}
                           source={require('../images/play-button.png')}/>
                </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Image style={{width: 30, height: 30}} source={require('../images/play-button.png')}/>
                </View>
            </TouchableOpacity>
        }
        <View style={{width: 20}}/>
        <TouchableOpacity onPress={onForward}
                          disabled={forwardDisabled}>
            <Image style={{width: 24, height: 24}}
                   source={require('../images/next.png')}/>
        </TouchableOpacity>
        <View style={{width: 40}}/>
    </View>
);

export default PlayControls;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 8,
    },
    playButton: {
        height: 72,
        width: 72,
        backgroundColor: 'white',
        borderRadius: 72 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 24
    },
    secondaryControl: {
        height: 18,
        width: 18,
    },
    off: {
        opacity: 0.30,
    }
})
