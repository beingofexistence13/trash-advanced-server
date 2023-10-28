// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot } from "../../../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';




// Main Functionality 
export default function FriendScreen({ navigation, route }) {
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            
            <Text>FriendScreen</Text>
            <Telepot navigationProp={navigation} />
            
                
            <View style={[styles.MULTIVERSE_BOTTOM_GLOW]}></View>
            <BottomBar 
                
                BOTTOMTABITEM_ONE_TELEPOT="Feed" 
                BOTTOMTABITEM_ONE_TEXT="Feed" 
                BOTTOMTABITEM_ONE_ICON={<Ionicons name="home" size={17} color="black" />}
    
                BOTTOMTABITEM_TWO_TELEPOT = "Friend"
                BOTTOMTABITEM_TWO_TEXT = "Friend"
                BOTTOMTABITEM_TWO_ICON = { <FontAwesome5 name="user-friends" size={17} color="black" /> }
    
                BOTTOMTABITEM_THREE_TELEPOT="Add"  BOTTOMTABITEM_THREE_ICON = { <AntDesign name="plus" size={20} color="black" /> }
    
                BOTTOMTABITEM_FOUR_TELEPOT = "Follower"
                BOTTOMTABITEM_FOUR_TEXT = "Follower"
                BOTTOMTABITEM_FOUR_ICON = { <FontAwesome name="address-book-o" size={17} color="black" /> }
    
                BOTTOMTABITEM_FIVE_TELEPOT = "Library"
                BOTTOMTABITEM_FIVE_TEXT = "Library"
                BOTTOMTABITEM_FIVE_ICON = { <Ionicons name="library" size={17} color="black" /> }
    
                navigationProp = { navigation }
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
