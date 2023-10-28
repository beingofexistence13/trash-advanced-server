import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import TopBar from "./components/topBar";
import BottomBar from "./components/bottomBar";

export default function App() {
  return (
    <View style={styles.container}>
        <TopBar />
            <StatusBar style="auto" />
            <Text  onPress={() => {
    alert('Hello');
  }}
>Hello App</Text>


      <View style={[styles.MULTIVERSE_BOTTOM_GLOW]}> </View>
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    position:"relative",
    
    height:"100%",
    width:"100%",
  },
  MULTIVERSE_BOTTOM_GLOW:{
    
    backgroundCoolor:"#fff",
    
    position:"absolute",
    bottom:60,
    left:0,
    
    
   height:3,
   width:"100%",
   
   zIndex:2,
  },
  
});
