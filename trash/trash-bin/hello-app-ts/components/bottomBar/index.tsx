import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';


let HOVER_COLOR = 'black';


export default function BottomBar() {


    const BOTTOM_ITEM_CLICK_FUNCTION = () => {
        alert("Bottom Item Clicked")
        let HOVER_COLOR = 'red';
        
    };


    return (
        <View style={styles.BOTTOMBAR_CONTAINER}>
    <View style={styles.BOTTOMBAR_CONTAINER_SMALL}>
        
        <TouchableOpacity onPress={() => {   alert('You tapped the button!')  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_ONE]}>
            
            <Ionicons name="home" size={17} color={HOVER_COLOR} />            
            <Text style={[ styles.HOVER_TEXT ]}>Feed</Text>


        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {   alert('You tapped the button!')  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_TWO]}>
            
            <FontAwesome5 name="user-friends" size={17} color={HOVER_COLOR} />
            <Text style={[ styles.HOVER_TEXT ]}>Friends</Text>
            
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {   alert('You tapped the button!')  }}  style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_THREE]}>
            
            <AntDesign name="plus" size={20} color={HOVER_COLOR} />
         
            
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {   alert('You tapped the button!')  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_FOUR]}>
            
            <FontAwesome name="address-book-o" size={17} color={HOVER_COLOR} />
            <Text style={[ styles.HOVER_TEXT ]}>Followers</Text>
            
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {   alert('You tapped the button!')  }} style={[styles.BOTTOMBAR_ITEM_CONTAINER,styles.BOTTOM_ITEM_COUNT_FIVE]}>
            
            <Ionicons name="library" size={17} color={HOVER_COLOR} />
            <Text style={[ styles.HOVER_TEXT ]}>Library</Text>
            
        </TouchableOpacity>
    </View>
    </View>
    );
}

const styles = StyleSheet.create({
    BOTTOMBAR_CONTAINER: {

        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#EAEAEA",

        position: "absolute",
        bottom: 0,
        left: 0,

        height: 50,
        width: "100%",

    },
    BOTTOMBAR_CONTAINER_SMALL: {

        overflow: "hidden",

        position: "relative",

        width: "100%",
        height: "100%",

    },
    BOTTOMBAR_ITEM_CONTAINER: {

        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        top: "50%",
        transform: ([{ translateY: '-50%' }]),

        height: "130%",
        width: "20%",


    },
    HOVER_TEXT: {

        color: { HOVER_COLOR },

    },


    BOTTOM_ITEM_COUNT_ONE: {

        left: "0%",
    },
    BOTTOM_ITEM_COUNT_TWO: {

        left: "20%",
    },
    BOTTOM_ITEM_COUNT_THREE: {
        borderColor:"#EAEAEA",
        borderWidth:1,
        left: "50%",
        
        transform: ([{ translateX: '-50%' },{ translateY: '-50%' }]),
        
        height:40,
        width:40,
    },
    BOTTOM_ITEM_COUNT_FOUR: {

        left: "60%",
    },
    BOTTOM_ITEM_COUNT_FIVE: {

        left: "80%",
    },

});
