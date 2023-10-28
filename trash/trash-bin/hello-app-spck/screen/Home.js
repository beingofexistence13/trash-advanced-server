import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';





export default function HomeScreen() {
    return (
        <View style={styles.container}>
            
            <Text onPress={()=>{
              alert("Working");
             navigator.navigate("Details")
            }}style={styles.text}>Hello I am HomeScreen of Hello App</Text>
            
        </View>
    );
}
