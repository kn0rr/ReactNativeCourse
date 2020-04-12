import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

const BoxScreen =()=>{
    return (
        <View style={styles.parentStyle}>
           
          {/*  <Text style={styles.textOneStyle}>Box1 Screen</Text>
            <Text style={styles.textTwoStyle}>Box2 Screen</Text>
            <Text style={styles.textThreeStyle}>Box3 Screen</Text>
    */}
        
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoStyle}/>
        <View style={styles.viewThreeStyle}/>

        </View>
    )
}

const styles=StyleSheet.create({
    parentStyle: {
        borderWidth:5,
        borderColor:'green',
        height: 200,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
        //flexDirection:'row',
        //justifyContent:'space-evenly',
    },
    textOneStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex: 2
    },
    textTwoStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex:1,
        //position:'absolute',
        //Alternatvie for top, bottom, left, right zero and postion:'absolute
       ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 1,
        borderColor: 'red',
        flex:1
    },
    viewOneStyle:{
        height:50,
        width:50,
        backgroundColor:'yellow'
    },
    viewTwoStyle:{
        height:50,
        width:50,
        alignSelf:'flex-end',
        backgroundColor:'green'
    },
    viewThreeStyle:{
        height:50,
        width:50,
        backgroundColor:'red'
    }
});

export default BoxScreen;