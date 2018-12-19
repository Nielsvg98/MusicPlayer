import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView, Alert} from 'react-native';

const Album = ({url, onPress, Centered}) => {


    const onScroll = event => {
        if(event.nativeEvent.contentOffset.x > 175 && event.nativeEvent.contentOffset.x < 185) {
            console.log("center!");
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} onScroll={onScroll} scrollEventThrottle={16}>
                <TouchableOpacity style={styles.shadow} onPress={onPress}>
                    <Image style={Centered ? styles.imageCentered : styles.imageNotCentered} source={{uri: url}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shadow} onPress={onPress}>
                    <Image style={Centered ? styles.imageNotCentered : styles.imageCentered} source={{uri: url}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shadow} onPress={onPress}>
                    <Image style={Centered ? styles.imageCentered : styles.imageNotCentered} source={{uri: url}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shadow} onPress={onPress}>
                    <Image style={Centered ? styles.imageCentered : styles.imageNotCentered} source={{uri: url}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shadow} onPress={onPress}>
                    <Image style={Centered ? styles.imageCentered : styles.imageNotCentered} source={{uri: url}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shadow} onPress={onPress}>
                    <Image style={Centered ? styles.imageCentered : styles.imageNotCentered} source={{uri: url}}/>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};



const {width} = Dimensions.get('window');
const imageSize = width - 100;

const styles = StyleSheet.create({
    container: {
        width: '140%',
        marginLeft: '-20%',
        backgroundColor: '#FDDA00',
        borderBottomLeftRadius: width,
        borderBottomRightRadius: width,
        overflow: 'hidden',
    },
    imageCentered: {
        marginTop: 36,
        width: imageSize,
        height: imageSize + 75,
        marginHorizontal: 12,
        borderRadius: 15,
    },
    imageNotCentered: {
        marginTop: 61,
        width: imageSize - 25,
        height: imageSize + 50,
        marginHorizontal: 12,
        borderRadius: 15,
        opacity: .3
    },
    shadow: {
        shadowOffset: {width: 0, height: 0,},
        shadowColor: 'black',
        shadowOpacity: 0.20,
        shadowRadius: 10
    }

})

export default Album;