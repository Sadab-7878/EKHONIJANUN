//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Header from "./components/Header";
import Card from "./components/Card";

const MyComponent = ({ navigation }) => {
  const wherenow = () => {
    return Category[selected].name;
  };
  const [datas, setDatas] = useState([]);
  const [selected, setSelected] = useState(0);
  const [whereiamnow, setWhereiamnow] = useState('');
  const [loading, setLoading] = useState(false);
  const [Category, setCategory] = useState([
    {
      id: 1,
      name: "Top Headlines",
      category: "general",
    },
    {
      id: 5,
      name: "Sports",
      category: "sports",
    },
    {
      id: 2,
      name: "Business",
      category: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      category: "health",
    },
    {
      id: 6,
      name: "Science",
      category: "science",
    },
    {
      id: 7,
      name: "Technology",
      category: "technology",
    },
  ]);
//   const wherenow = () => {
//     return Category[selected].name;
//   };

  const getData = async () => {
    setLoading(true);

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=033491298a3e46fca494fde6a5a4234d&category=${Category[selected].category}`
    );

    const data = await response.json();
    setDatas(data.articles);

    
    setLoading(false);
  };
  
  useEffect(() => {
    getData();
    setWhereiamnow(wherenow());
  }, [selected]);

//   const whereiamnow = wherenow(); // Move this line here

const randomColors = ["#FF5733", "#5733FF", "#FF33AE", "#33AFFF"];
const getRandomColor = () => {
  const randomIndexedColor = Math.floor(Math.random() * randomColors.length);
  const randomColor = randomColors[randomIndexedColor];
  return randomColor;
};
const [color, setColor] = useState(getRandomColor());

useEffect(() => {
  setColor(getRandomColor());
}, [selected]);

  return (
    <>
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator color={"#ff5733"} size={36} />
        </View>
      ) : (
        <View>
          <Header navigation={navigation} />

          <View className="px-4 py-3">
            <Text 
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 15, color: color, alignSelf: 'center' }}
            >
                 {whereiamnow}
               {/* Current Category: {whereiamnow} */}

            </Text>
            <FlatList
              data={Category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    className={
                      index == selected
                        ? "px-4 py-2 mr-3 rounded-md bg-orangeprimary"
                        : "px-4 py-2 mr-3 rounded-md bg-gray-200"
                    }
                    onPress={() => {
                      setSelected(index);
                      getData();
                    }}
                  >
                    <Text
                      className={
                        index == selected ? "text-white" : "text-gray-600"
                      }
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
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
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default MyComponent;




