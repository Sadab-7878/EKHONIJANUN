import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Splash from './src/Splash';
import Search from './src/Search';
import NewsViewer from './src/NewsViewer';

const MyComponent = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="NewsViewer" component={NewsViewer} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default MyComponent;
