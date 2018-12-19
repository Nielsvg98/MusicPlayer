import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Header = ({ message, playlist, onDownPress, onQueuePress, onMessagePress }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onDownPress}>
            <Image style={styles.button}
                   source={require('../images/left-arrow.png')} />
        </TouchableOpacity>
        <Text onPress={onMessagePress}
              style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={onQueuePress}>
            <Image style={styles.button}
                   source={require('../images/playlist.png')} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
        height: 52,
        paddingTop: 20,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        backgroundColor: '#FDDA00'
    },
    message: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
        fontWeight: '100',
        fontSize: 16,
    },
    button: {
        width: 20,
        height: 20
    }
});

export default Header;