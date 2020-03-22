import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen =() => {
    const friends =[
        {name: 'Friend #1', age:15},
        {name: 'Friend #2', age:16},
        {name: 'Friend #3', age:17},
        {name: 'Friend #4', age:18},
        {name: 'Friend #5', age:19},
        {name: 'Friend #6', age:17},
        {name: 'Friend #7', age:17},
    ]; 
    return (<FlatList 
        //horizontal List
        //horizontal
        
        //dont show horizontal Scroll bar
        //showsHorizontalScrollIndicator={false}
        //define Key for the list items
        keyExtractor={friend=>friend.name}
        //get data
        data={friends}
        //render the items  
        renderItem={({item})=>{
        return <Text style={styles.textStyle}>{
            item.name} - Age {item.age}
            </Text>
    }}
    />);
    return <Text>List Screen</Text>;
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;