import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from './screens/HomeScreen';
import {RestaurantScreen} from './screens/RestaurantScreen';

const Stack = createNativeStackNavigator();

export  function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // Define a tela inicial
        screenOptions={{
          headerShown: false, // Remove os headers padrão
          animation: 'slide_from_right', // Melhora transições no Android
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
