// Imports
import * as React from 'react';
import { Dimensions, FlatList, Image, Animated,StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux';
import { light,dark } from '../redux/themeSlice';


const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];
const imageW = width * 0.7;
const imageH = imageW * 1.54;




// Main Functionality 
export default function SidebarScreen({ navigation,route }) {
   
  const theme = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()
   
    return (
        <View style={styles.container}>
            <View style={styles.drawer}>
                <View style={[ styles.drawerLeft,styles.center,{backgroundColor:theme.primary} ]}>
                    <Text>Left</Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(light())
                          
                      }}
                      style={[ {backgroundColor:"green"},{padding:10}]}
                    >
                      Light
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(dark())
                      }}
                      style={[ {backgroundColor:"yellow"},{padding:10} ]}
                    >
                      Dark
                    </TouchableOpacity>
             
                    <View style={[ styles.drawerTop ]}>
                        <TouchableOpacity>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={[ styles.drawerLogo ]}>Hello</Text>
                        <TouchableOpacity>
                            <AntDesign name="pushpino" size={24} color="black" />                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="camerao" size={24} color="black" />                        
                        </TouchableOpacity>
                        
                    </View>
                    <View style={[ styles.drawerBottom ]}>
                        <Text>Web3</Text>
                        <Text>Web2</Text>
                    </View>
                </View>
                <View style={[styles.drawerRight,styles.center]}>
                     <Text>Right</Text>
                </View>
            </View>
        </View>
    );
}





// Styles
const styles = StyleSheet.create({
    center:{
        alignItems:"center",
        justifyContent:"center",
    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        position: "relative",
        
        height: "100%",
        width: "100%",
    },
    drawer:{
        flexDirection:"row",
        flex:1,
        
        
        height:"100%",
        width:"100%",
    },
    drawerRight:{
        backgroundColor:"transparent",
        
        height:"100%",
        width:"20%",
    },
    drawerLeft:{
        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        
        position:"relative",
        paddingTop:50,
        paddingBottom:50,
        
        height:"100%",
        width:"80%",
    },
    drawerTop:{
        flexDirection:"row",
        columnGap:10,
        alignItems:"center",
        backgroundColor:"#fff",
        borderColor:"#F4F4F4",
        borderBottomWidth:1,
        
        padding:15,
        position:"absolute",
        top:0,
        left:0,
        
        height:50,
        width:"100%",
        zIndex:1,
    },
    drawerLogo:{
        flex:1,
        fontStyle:"bold",
        fontWeight:900,
    },
    drawerBottom:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"red",
        borderRadius:10,
        
        position:"absolute",
        top:"93%",
        left:"50%",
        transform:([
          {translateX:"-50%"},
          {translateY:"-50%"},
        ]),
        
        
        height:50,
        width:"95%",
        zIndex:1,
    },
});






/* 🗑️ Trash 
            <Animated.Image
                blurRadius={50}
                source={{uri: 'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'}}
                style={[
                  StyleSheet.absoluteFillObject,
            ]} />
*/