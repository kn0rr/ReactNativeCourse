import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {
  

  return (
  <View>
    <Text style={styles.text}>Lets do it</Text>
    <Button 
    title="Components Demo" 
    onPress={()=> navigation.navigate('Components')}
    />
    <Button 
    title="List Demo"
    onPress={()=> navigation.navigate('List')}
    />
     <Button 
    title="Image Demo" 
    onPress={()=> navigation.navigate('Image')}
    />
     <Button 
    title="Counter Demo" 
    onPress={()=> navigation.navigate('Counter')}
    />
    <Button 
    title="Color Demo" 
    onPress={()=> navigation.navigate('Color')}
    />
    <Button 
    title="Square Demo" 
    onPress={()=> navigation.navigate('Square')}
    />
     <Button 
    title="Text Demo" 
    onPress={()=> navigation.navigate('Text')}
    />


    <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>List Demo</Text>
      <Text>Text 2</Text>
    </TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 10
  }
});

export default HomeScreen;
