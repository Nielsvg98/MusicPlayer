import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

const TrackDetails = ({
                          title,
                          artist,
                          onTitlePress,
                          onArtistPress,
                      }) => (
    <View style={styles.container}>
        <View style={styles.detailsWrapper}>
            <Text style={styles.title} onPress={onTitlePress}>{title}</Text>
            <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
        </View>
    </View>
    );

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        flexDirection: 'row',
        paddingLeft: 20,
        alignItems: 'center',
        paddingRight: 20,
        backgroundColor: 'white'
    },
    detailsWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
    },
    artist: {
        fontWeight: '100',
        color: 'black',
        fontSize: 12,
        marginTop: 4,
    },

});

export default TrackDetails;