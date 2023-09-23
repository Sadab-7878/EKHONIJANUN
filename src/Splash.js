//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import NewsPaper from '../assets/newspaper.png'
// create a component
const MyComponent = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
    }, []);
    return (
        <View className='flex-1 justify-center items-center bg-orangeprimary space-y-3'>
            <Image source={NewsPaper} className='h-28 w-28'/>
            <Animatable.Text className='text-4xl text-white font-bold' animation='fadeInLeftBig' duration={2000}>EKHONIJANUN</Animatable.Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
 
});

//make this component available to the app
export default MyComponent;
