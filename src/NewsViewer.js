import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { Box, CalendarDaysIcon, Fab, FabIcon, FabLabel, GluestackUIProvider, Icon, config, ArrowLeftIcon } from "@gluestack-ui/themed";

const NewsViewer = ({ navigation, route }) => {
  const { url } = route.params;

  const goback = () => {

    navigation.navigate('Home');

  }

  return (
    <GluestackUIProvider config={config.theme}>
      <WebView source={{ uri: url }} style={{ flex: 1 }} />

      

    

    
    
   
          <Fab size="sm" placement="bottom right" isHovered={false} isDisabled={false} isPressed={false} onPress={goback}>
            <FabIcon as={ArrowLeftIcon} mr="$1"/>
            <FabLabel>Go Back</FabLabel>
          </Fab>
        
            
     

      
    </GluestackUIProvider>
    
  );
};

export default NewsViewer;

const styles = StyleSheet.create({});
