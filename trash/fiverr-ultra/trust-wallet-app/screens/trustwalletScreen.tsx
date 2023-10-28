// Imports
import React, {
    useState
} from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    ScrollView,
    Pressable,
    FlatList,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import {
    TopBar,
    BottomBar,
    Telepot
} from "../components";
import {
    Feather,
    AntDesign,
    FontAwesome,
    FontAwesome5,
    Ionicons
} from '@expo/vector-icons';







// Main Functionality
export default function TrustWalletScreen({
    navigation, route
}) {

    return (
        <View style={styles.container}>
            {/* TopBar */}
            <Pressable style={styles.topbar}>
                <Pressable style={styles.notificationContainer}>
                    <Ionicons name="notifications-outline" size={24} color="#fff" />
                </Pressable>
                <Pressable style={styles.headerTittleContainer}>
                    <Text style={styles.headerTittle}>4.56464%</Text>
                </Pressable>
                <Pressable style={styles.filterContainer}>
                    <Ionicons name="filter-outline" size={24} color="#fff" />
                </Pressable>
            </Pressable>
            <Text style={styles.text}>Trust Wallet App</Text>
            {/* BottomBar */}
            <Pressable style={styles.bottombar}>
                <Pressable style={styles.walletContainer}>
                    <Ionicons name="wallet-outline" size={24} color="#fff" />
                </Pressable>
                <Pressable style={styles.exploreContainer}>
                    <Ionicons name="bulb-outline" size={24} color="#fff" />
                </Pressable>
                <Pressable style={styles.cardContainer}>
                    <Ionicons name="card-outline" size={24} color="#fff" />
                </Pressable>
                <Pressable style={styles.moreContainer}>
                    <Ionicons name="list-outline" size={24} color="#fff" />
                </Pressable>
                <Pressable style={styles.settingContainer}>
                    <Ionicons name="settings-outline" size={24} color="#fff" />
                </Pressable>
            </Pressable>
            
        </View>
    );
}
    // Styles
    const styles = StyleSheet.create({
        
        container: {
            backgroundColor: "#000",
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            position: "relative",
            height: "100%",
            width: "100%",
        },
        text:{
            
            color:"#fff",
            fontSize:"1",
            fontStyle:"bold",
            fontWeight:"900",
            
            
        },
        
        // Topbar
        topbar:{
            
            backgroundColor:"red",
            flexDirection:"row",
            columnGap:5,
            position:"absolute",
            top:0,
            left:0,
            
            height:50,
            width:"100%",
            
            zIndex:3,
        },
        notificationContainer:{
            
            backgroundColor:"yellow",
            alignItems:"center",
            justifyContent:"center",
            
            height:"100%",
            width:"5%",
            
            
        },
        headerTittleContainer:{
            
            backgroundColor:"pink",
            alignItems:"center",
            justifyContent:"center",
            
            height:"100%",
            width:"90%",
            
        },
        headerTittle:{
            
            color:"#fff",
            fontSize:1.5,
            fontWeight:"900",
            
            
        },
        filterContainer:{
            
            backgroundColor:"green",
            alignItems:"center",
            justifyContent:"center",
            
            height:"100%",
            width:"5%",
            
            
        },
        
        // BottomBar
        bottombar:{
            
            backgroundColor:"blue",
            borderRadius:25,
            flex:1,
            alignItems:"center",
            justifyContent:"space-evenly",
            flexDirection:"row",
            columnGap:5,
            
            position:"absolute",
            bottom:10,
            left:"50%",
            transform:([
              {translateX:"-50%"},
              {translateY:"-50%"},
            ]),
            
            height:50,
            width:"90%",
            
        },
        walletContainer:{
            
            borderWidth:2,
            borderColor:"red",
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        exploreContainer:{
            
            borderWidth:2,
            borderColor:"red",
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        cardContainer:{
            
            borderWidth:2,
            borderColor:"red",
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        moreContainer:{
            
            borderWidth:2,
            borderColor:"red",
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        settingContainer:{
            
            borderWidth:2,
            borderColor:"red",
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        
        
        
    });
    
    
    
    
    
    

    
