// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
    TopBar,
    BottomBar,
    Telepot,
    GameSpace_BottomBar
} from "../components";




// Main Functionality 
export default function SearchScreen({ navigation,route }) {
    return (
        <View style={styles.container}>
            
            <Text>Intro</Text>
            <GameSpace_BottomBar
            navigationProp={ navigation }
            routeProp={ route }
            BOTTOMBAR_BACKGROUND_PROP={"#000"}
            BOTTOMBAR_LINE_BACKGROUND_PROP={"#303030"}
            TEXT_COLOR_PROP={"#fff"}
            ICON_COLOR="#fff"
            />
            
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



});
