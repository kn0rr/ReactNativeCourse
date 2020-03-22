import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'hi beThere';
    const name ="Tobias";
    const jsxElemet= <Text>pfff kathrin</Text>
return (

 <View>
    <Text style= {styles.headerStyle}>This is the components Screen</Text>
    <Text style={styles.textStyle}>Hi {name}</Text>
    {jsxElemet}
    </View>);
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 20
    },
    headerStyle:{
        fontSize: 45
    }
})
export default ComponentsScreen;