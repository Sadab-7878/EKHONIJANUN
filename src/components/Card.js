//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// create a component

const MyComponent = ({ item, navigation }) => {
  // const [titleColor, setTitleColor] = useState('');

  // const randomColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33AE', '#33AFFF'];

  // useEffect(() => {
  //   // Generate a random index to select a color from the array
  //   const randomIndex = Math.floor(Math.random() * randomColors.length);
  //   const randomColor = randomColors[randomIndex];

  //   // Set the random color for the title
  //   setTitleColor(randomColor);
  // }, []);

  const randomColors = ["#FF5733", "#5733FF", "#FF33AE", "#33AFFF"];
  const getRandomColor = () => {
    const randomIndexedColor = Math.floor(Math.random() * randomColors.length);
    const randomColor = randomColors[randomIndexedColor];
    return randomColor;
  };
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  return (
    <View className="px-4 py-4 mb-4">
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : "https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1024-512.png",
        }}
        className="aspect-video w-full rounded-md resize"
      />

      <View className="px-2 my-2">
        <Text className="text-base" style={{ color: color }}>
          {item.title}
        </Text>
        <Text className="text-sm my-2 text-gray-500">{item.description}</Text>
        <View className="flex-row justify-between  items-center my-2">
          <Text className="text-sm  text-gray-500" style={{ color: color }}>
            {item.author}
          </Text>
          <Text className="text-sm  text-gray-500">
            {" "}
            {item.publishedAt.toLocaleString("en-GB", { timeZone: "UTC" })}
          </Text>
        </View>
      </View>

      <View
        className="absolute top-5 right-4 px-4 rounded-md"
        style={{ backgroundColor: color }}
      >
        <Text className="text-xs text-white py-1 font-semibold">
          {item.source.name}
        </Text>
      </View>

      <TouchableOpacity
        className=" px-2 py-2 w-28 mt-2 justify-center items-center rounded-md"
        style={{ backgroundColor: color }} onPress={()=>navigation.replace('NewsViewer', {
          url: item.url
        })}
      >
        <Text className="text-white font-semibold">Read More...</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles

//make this component available to the app
export default MyComponent;
