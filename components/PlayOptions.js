import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const PlayOptions = ({onRepeatPress, onLikePress, onShufflePress}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onRepeatPress}>
            <Image style={styles.button}
                   source={require('../images/repeat.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLikePress}>
            <Image style={styles.button}
                   source={require('../images/heart.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={onShufflePress}>
            <Image style={styles.button}
                   source={require('../images/shuffle.png')}/>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        height: 24,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    button: {
        width: 20,
        height: 20,
        opacity: 0.3
    }
});

export default PlayOptions;