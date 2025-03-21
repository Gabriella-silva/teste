import {NavigationContainer} from '@react-navigation/navigate';
import {createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';
import { View, Text} from 'react-native';
import React from 'react';
const Stack = createNativeStackNavigator();
export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Restaurant" component={RestaurantScreen}/>

            
            </Stack.Navigator>
        </NavigationContainer>
    )
   
}