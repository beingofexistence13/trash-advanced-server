import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';

import tw from "tailwind-react-native-classnames";
import {
  Provider
} from "react-redux";
import {
  store
} from "./store";




export default function App() {
  registerNNPushToken(2806, 'PFWSocdJzhNJwNdFuwdJLV');
  return (
    
      
       
        
      
    <View style={styles.body}>
     
      <Text style={tw`text-yellow-600 `}>Open up App.js to start working on your app!</Text>
      <Text style={styles.textTwo}>White borders</Text>
      
      
      
      <StatusBar style="auto" />
    </View>
        
          
     
      
      
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTwo: {
    borderWidth: 1.5,
    backgroundColor: '#ffffff',
    borderColor: '#eaeaea',    
   padding: 10,
   borderRadius:7.5,
  },
  
  
});


                                                                                                                                                        
