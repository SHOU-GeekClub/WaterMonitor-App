// In App.js in a new project

import React from 'react';
import {View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/login/loginScreen";
import MainScreen from './screens/main/mainScreen';
import RegisterScreen from './screens/register/registerScreen';
import SuccessScreen from './screens/registerSuccess/successScreen';
const Stack = createNativeStackNavigator();
function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;