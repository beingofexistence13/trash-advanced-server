// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { Feather,AntDesign,FontAwesome } from '@expo/vector-icons';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  LongPressGestureHandler,
  ScrollView,
  State,
  TapGestureHandler,
  
} from 'react-native-gesture-handler';



// Variables and Typescript Types
const SIZE = 100.0;
const CIRCLE_RADIUS = SIZE * 2;
type ContextType = {
  translateX: number;
  translateY: number;
};



export default function TopBar( props ) {
  
  
  let doubleTapRef = React.createRef();
  let onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("Your Holding This for so long");
    }
  };
  let onSingleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert("I'm touched");
    }
  };
  let onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Double tap!');
    }
  };
  
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

      if (distance < CIRCLE_RADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });


 
  return (
    <GestureHandlerRootView style={styles.TOPBAR_CONTAINER_BIG}>
      
      <View style={styles.TOPBAR_CONTAINER}>
      
      
      
          <View style={[styles.TOPBAR_ITEM_CONTAINER,styles.DRAWERNAVIGATION_TOGGLER_CONTAINER]}>
              <TouchableOpacity style={[styles.DRAWERNAVIGATION_ITEM_CONTAINER]}>
                  <Feather name="menu" size={24} color="black" />
              </TouchableOpacity>
          </View>
          
          <View style={[styles.TOPBAR_ITEM_CONTAINER,styles.SCREEN_TITTLE_CONTAINER]}>
            <LongPressGestureHandler
                onHandlerStateChange={onHandlerStateChange}
                minDurationMs={1200}>
                <TapGestureHandler
                  onHandlerStateChange={onSingleTap}
                  waitFor={doubleTapRef}>
                  <TapGestureHandler
                    
                    ref={doubleTapRef}
                    onHandlerStateChange={onDoubleTap}
                    numberOfTaps={2}>
                     <View style={styles.SCREEN_TITTLE_NAME}>
                     
                      { props.headerTittle }
                     
                     </View>
                  </TapGestureHandler>
                </TapGestureHandler>
            </LongPressGestureHandler>
          </View>
          
          
          
          
          <View style={[styles.TOPBAR_ITEM_CONTAINER,styles.HEADERRIGHT_CONTAINER]}>
              
              
              <TouchableOpacity onPress={() => {   props.navigationProp.navigate("Multiverse")  }} style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.MULTIVERSE_TOGGLER]}>
                  <FontAwesome name="magic" size={15} color="black" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {   props.navigationProp.navigate("Sidebar")  }} style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.SIDEBAR_TOGGLER]}>
                  <Feather name="sidebar" size={15} color="black" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {   props.navigationProp.navigate("Search")  }} style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.SIDEBAR_TOGGLER]}>
                  <AntDesign name="search1" size={15} color="black" />
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => {   props.navigationProp.navigate("Profile")  }} style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.USER_TOGGLER]}>
                  <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.USERLOGO_CONTAINER, rStyle]}>
                    
                      <Image 
                          
                          style={[styles.USERLOGO]}
                          source={require("../../assets/multiverse.png")}
                          
                      />    
                    
                      
                    </Animated.View>
                  </PanGestureHandler>
              </TouchableOpacity>
              
              
          </View>
          
      </View>
    </GestureHandlerRootView>
      
  );
}
// Styles Ohh...
const styles = StyleSheet.create({
  SCREEN_TITTLE_NAME:{
    
 
 
    justifyContent:"center",

      
     width:"100%",
    height:"100%",
  },
  TOPBAR_CONTAINER_BIG:{
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        
        position:"absolute",
        top:0,
        left:0,
    
        
        height:50,
        width:"100%",
    
    
  },
  TOPBAR_CONTAINER: {
      
        flexDirection:"row",
        
        padding:5,
        
        height:"100%",
        width:"100%",
        
  },
  TOPBAR_ITEM_CONTAINER:{
      
      
        height:"100%",
      
  },
  DRAWERNAVIGATION_TOGGLER_CONTAINER:{
      
    
      alignItems:"center",
      justifyContent:"center",
      
      width:45,
  },
    DRAWERNAVIGATION_ITEM_CONTAINER:{
      
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
      
      height:40,
      width:40,
  },

  SCREEN_TITTLE_CONTAINER:{
      
      flex:1,
      alignItems:"start",
      justifyContent:"center",
      
      paddingLeft:3.5,
      
   
  },
  USERLOGO:{
    
    borderRadius:"50%",
    
    height:31.5,
    width:31.5,
  },
  HEADERRIGHT_CONTAINER:{
      
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"end",
      columnGap:2,
      
      width:"50%",
      
      
  },
  
  
  
  
  
  
  
  
  HEADERRIGHT_ITEM_CONTAINER:{
      
      backgroundColor:"#F4F4F4",
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
      
      height:32.5,
      width:32.5,
  },
  USER_TOGGLER:{
      
      backgroundColor:"#F4F4F4",
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
      
      height:36,
      width:36,
  },
  USERLOGO_CONTAINER:{
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
    
      height:"100%",
      width:"100%",
    
  },
});







