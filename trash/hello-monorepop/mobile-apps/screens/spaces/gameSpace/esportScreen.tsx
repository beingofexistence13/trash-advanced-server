// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TopBar, BottomBar,Telepot,GameSpace_BottomBar } from "../../../components";
import { Feather, AntDesign, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';






// Main Functionality 
export default function EsportScreen({ navigation,route }) {
    return (
        <View style={styles.container}>
            
            <Text>{ route.name }</Text>
            <Telepot navigationProp={navigation} />
            
            
            {/* <View style={[styles.MULTIVERSE_BOTTOM_GLOWany]}></View> */}
            <GameSpace_BottomBar
                navigationProp={navigation}
                routeProp={route} BOTTOMBAR_BACKGROUND_PROP={undefined} BOTTOMBAR_LINE_BACKGROUND_PROP={undefined} TEXT_COLOR_PROP={undefined} ICON_COLOR={undefined}            />
            
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
