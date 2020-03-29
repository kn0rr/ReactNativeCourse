import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const ImageDetail=(props)=> {
    console.log(props);
return <View>
    <Image source={props.imageSource} style={{width:50, height:50}}/>
    <Text>{props.title}</Text>
    <Text>{props.score}</Text>
    
</View>
};

const style= StyleSheet.create(
    {

    }
)

export default ImageDetail;