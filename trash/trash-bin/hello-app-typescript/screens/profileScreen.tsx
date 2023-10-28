// Imports
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot } from "../components";
import {
  LongPressGestureHandler,
  ScrollView,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';







// Main Functionality 
export default function ProfileScreen({ navigation,route }) {
  
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


  
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            <Text>Profile</Text>
            <Telepot navigationProp={navigation} />
            
            
            <LongPressGestureHandler
                onHandlerStateChange={onHandlerStateChange}
                minDurationMs={1000}>
                <TapGestureHandler
                  onHandlerStateChange={onSingleTap}
                  waitFor={doubleTapRef}>
                  <TapGestureHandler
                    ref={doubleTapRef}
                    onHandlerStateChange={onDoubleTap}
                    numberOfTaps={2}>
                     <View style={styles.box} />
                  </TapGestureHandler>
                </TapGestureHandler>
            </LongPressGestureHandler>

            
        </View>
    );
}
// Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        position: "relative",
        
        height: "100%",
        width: "100%",
    },
    box: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        backgroundColor: 'plum',
        margin: 10,
    },



});










