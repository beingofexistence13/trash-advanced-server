
import React from 'react';
import { Image,StyleSheet} from 'react-native';
import { BlurView } from 'expo-blur';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';




const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';
// Yes
export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
   <Text>
   Tab1
   </Text>
    <View style={styles.container}>
      <View style={ styles.image}>
      </View>
      <BlurView intensity={80} tint="light" style={styles.blurContainer}>
        <Text style={styles.text}>2 Bluring View</Text>
      </BlurView>
    </View>   
   
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    position:"relative",
    flex: 1,
    alignItems: 'center',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:{
    
   
    backgroundColor: "#9fbdf7",
    height:300,
    width:450,
    left:0,
    
  },
  blurContainer:{
    
    position:"absolute",
    top:0,
    
  },
});
