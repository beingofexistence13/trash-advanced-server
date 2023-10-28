// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot } from "../../../components";
import { Feather,Foundation, AntDesign, FontAwesome, FontAwesome5, Ionicons,MaterialIcons } from '@expo/vector-icons';




// Main Functionality 
export default function FreeScreen({ navigation, route }) {
    return (
        <View style={styles.container}>
            
            <TopBar navigationProp={navigation} headerTittle={route.name}/>
            
            <Text>FreeScreen</Text>
            <Telepot navigationProp={navigation} />
            
                
            <View style={[styles.MULTIVERSE_BOTTOM_GLOW]}></View>
            <BottomBar 
                
                BOTTOMTABITEM_ONE_TELEPOT="Local" 
                BOTTOMTABITEM_ONE_TEXT="Local" 
                BOTTOMTABITEM_ONE_ICON={<Foundation name="social-myspace" size={17} color="black" />
            }

            BOTTOMTABITEM_TWO_TELEPOT = "Free"
            BOTTOMTABITEM_TWO_TEXT = "Free"
            BOTTOMTABITEM_TWO_ICON = { <FontAwesome5 name="hotjar" size={17} color="black" /> }

            BOTTOMTABITEM_THREE_TELEPOT="Explore"  BOTTOMTABITEM_THREE_ICON = { <MaterialIcons name="explore" size={17} color="black" /> }

            BOTTOMTABITEM_FOUR_TELEPOT = "Music"
            BOTTOMTABITEM_FOUR_TEXT = "Music"
            BOTTOMTABITEM_FOUR_ICON = { <Ionicons name="musical-note" size={17} color="black" /> }

            BOTTOMTABITEM_FIVE_TELEPOT = "Share"
            BOTTOMTABITEM_FIVE_TEXT = "Share"
            BOTTOMTABITEM_FIVE_ICON = { <FontAwesome name="share" size={17} color="black" /> }

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
