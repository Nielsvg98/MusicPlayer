import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import Album from "./components/Album";
import RoundShape from "./components/RoundShape";
import TrackDetails from "./components/TrackDetails";
import PlayOptions from "./components/PlayOptions";
import Seekbar from "./components/Seekbar";
import PlayControls from "./components/PlayControls";

export default class App extends Component {


    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <Header message={"Play from playlist"} playlist={"HipHop 2018"}></Header>
                <Album Centered={false} url={"https://i.imgur.com/UQC3hug.jpg"}/>
                <TrackDetails title={"Better now"} artist={"Post Malone"}/>
                <PlayOptions/>
                <Seekbar trackLength={204} currentPosition={156} />
                <PlayControls />
            </View>
        );
    }

}

const styles = StyleSheet.create({
});


