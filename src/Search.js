import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon, GluestackUIProvider } from '@gluestack-ui/themed'
import { TextInput } from 'react-native'
import Card from "./components/Card";
import { TouchableOpacity } from 'react-native';


const Search = ({navigation}) => {
    const[searchtext, setSearchtext] = useState('');
  const [datas, setDatas] = useState([]);


    const searchNews = async(text) => {

        setSearchtext(text);


        if(text.length > 2) {

        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=033491298a3e46fca494fde6a5a4234d&q=${text}`
        );
    
        const data = await response.json();
        setDatas(data.articles);

        }
    
        

    }
  return (
    <GluestackUIProvider>
    <View className='flex-1'>

        <View className='bg-orangeprimary flex-row items-center gap-2 px-5 py-10'>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>

            <ArrowLeftIcon color={'white'} size='xl' />
            </TouchableOpacity>


            <TextInput placeholder='Enter Your Query' value={searchtext} placeholderTextColor={'white'} className='text-lg font-semibold text-white' onChangeText={(text) => 

            searchNews(text)
            
            }/>

        </View>

        <View>
            <FlatList
              data={datas}
              renderItem={({ item, index }) => {
                return <Card item={item} navigation={navigation} index={index}/>;
              }}
            />
          </View>

    </View>

    </GluestackUIProvider>
  )
}

export default Search

const styles = StyleSheet.create({})