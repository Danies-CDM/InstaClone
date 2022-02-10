import React, {useState} from 'react';
//import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Home from '../screen/Home';
import SignUp from '../screen/SignUp';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
