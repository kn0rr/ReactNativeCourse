import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const COUNTER_INCREMENT=1;

const reducer =(state,action)=>{
    switch (action.type){
        case'increase_Counter':
            return {...state, counter:state.counter+action.payload};
        case'decrease_Counter':
            return {...state,counter:state.counter+action.payload};
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state,dispatch]=useReducer(reducer,{counter:0});
    const {counter}=state;

    //const[counter, setCounter]= useState(0);

    return <View>
        <Button title="Increase" onPress={()=>{
            dispatch({type:'increase_Counter',payload:COUNTER_INCREMENT});
        }}/>
        <Button title="Decrease" onPress={()=>{
            dispatch({type:'decrease_Counter',payload:-1*COUNTER_INCREMENT});
        }}/>
        <Text>Current Count:{state.counter}</Text>
    </View>
};

const styles = StyleSheet.create(
    {

}
);

export default CounterScreen;