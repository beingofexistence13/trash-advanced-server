

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import Video from "react-native-video";
import Icons from "react-native-vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Home.js";



/* @hide const styles = StyleSheet.create({ ... }); */
function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Details() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App (){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
     <Home />
      
    </View>
  );
  
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
      
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  blur:{
    
    baçkgroundColor : "red",
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    
    width: '100%',
    height: "25%",
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600'
  },
});


export default App;








