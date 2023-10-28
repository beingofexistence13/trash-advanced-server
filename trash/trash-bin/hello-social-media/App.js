// Import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Button,Image } from 'react-native';
import { React,useLayoutEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Variables
const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('@expo/snack-static/react-native-logo.png')}
    />
  );
}



function HomeScreen({ navigation }) {
  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <TouchableOpacity activeOpacity={0.9}>
      <Text>Home Screen</Text>
      <Text onPress={()=>{
      
    
        navigation.navigate("Library");
        
      }}>Go To Library Screen</Text>
      <Text onPress={()=>{
      
      
        navigation.navigate("Details");
        
      }}>Go To Details Screen</Text>
    </TouchableOpacity>    
    
    </View>
  );
}
function LibraryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Library Screen</Text>
      <Text onPress={()=>{
        navigation.navigate("Home")
      }}>Go To Home Screen</Text>
      <Text onPress={()=>{
      
     
        navigation.navigate("Details");
        
      }}>Go To Details Screen</Text>
      
    </View>
    
  );
}
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      />
      <Text onPress={()=>{
      
      
        navigation.navigate("Library");
        
      }}>Go To Library Screen</Text>
      
    </View>
  );
}
const Social_HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Social HomeScreen</Text>
      <StatusBar style="auto" />
    </View>
  );
  
};







// App Engine
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />      
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;





