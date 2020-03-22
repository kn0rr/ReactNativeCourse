import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen=()=> {
    return <View>
        <ImageDetail score="Score - 10" title="Sword" imageSource={require('../../assets/SwordwithGradients.png')}/>
        <ImageDetail score="Score - 8" title="Shield" imageSource={require('../../assets/Shield.png')}/>
        <ImageDetail score="Score - 6" title="Moon" imageSource={require('../../assets/MoonWithGradients.png')}/>
    </View>
};

const style= StyleSheet.create(
    {

    }
)

export default ImageScreen;