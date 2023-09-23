//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Search from '../../assets/search.png'
const MyComponent = ({navigation}) => {
  return (
    <View className="flex-row px-4 py-8 justify-between items-center bg-white shadow-lg">

      
      <Text className='text-lg font-bold text-orangeprimary mt-5'>EKHONIJANUN</Text>
      <TouchableOpacity onPress={() => navigation.replace('Search')}>

      <Image source={Search} className='w-5 h-5 mt-5'/>
      </TouchableOpacity>
    
    

      
  
    </View>
  );
};

const styles = StyleSheet.create({});

export default MyComponent;
