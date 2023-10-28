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
                    <Ionicons name="notifications-outline" size={24} color="#3b3c3d" />
                </Pressable>
                <Pressable style={styles.headerTittleContainer}>
                    <Text style={styles.headerTittle}>4.56464%</Text>
                </Pressable>
                <Pressable style={styles.filterContainer}>
                    <Ionicons name="filter-outline" size={24} color="#3b3c3d" />
                </Pressable>
            </Pressable>
            {/* Main */}
      <ScrollView
           minimumZoomScale={1}
           bouncesZoom={true}
           automaticallyAdjustContentInsets={true}
          contentContainerStyle={ {
                flexGrow: 1,
                alignItems: "center",
                rowGap: 10,
                paddingTop: 50,
            }}
            style={[styles.main]}
            >
            <Pressable style={styles.blockchainstaffContainer}>
                <Text>Receive A Virtual Card ♠️</Text>
                <Pressable style={styles.blockchainStaff}>
                    <Pressable style={styles.blockchainSendContainer}>
                        Se
                    </Pressable>
                    <Pressable style={styles.blockchainReceiveContainer}>
                        Re
                    </Pressable>
                    <Pressable style={styles.blockchainBuyContainer}>
                        Bu
                    </Pressable>
                    <Pressable style={styles.blockchainSwapContainer}>
                        Sw
                    </Pressable>
                </Pressable>
            </Pressable>
                <Pressable style={styles.blockchainDetailIndicator}>
                    <Text>Tokens</Text>
                    <Text>Nftss</Text>
                </Pressable>
            
            <ScrollView
           minimumZoomScale={1}
           bouncesZoom={true}
           automaticallyAdjustContentInsets={true}
          contentContainerStyle={ {
                flexGrow: 1,
                alignItems: "center",
                rowGap: 10,
                paddingTop: 50,
            }} style={styles.blockchainDetailContainer}>
                <ScrollView 
           minimumZoomScale={1}
           bouncesZoom={true}
           automaticallyAdjustContentInsets={true}
          contentContainerStyle={ {
                flexGrow: 1,
                alignItems: "center",
                rowGap: 10,
                paddingTop: 50,
            }}                 
                style={styles.blockchainTokenDetail}>
                    <Text>Tokens</Text>
                    <Text>Nftss</Text>
                </ScrollView>
                <ScrollView 
           minimumZoomScale={1}
           bouncesZoom={true}
           automaticallyAdjustContentInsets={true}
          contentContainerStyle={ {
                flexGrow: 1,
                alignItems: "center",
                rowGap: 10,
                paddingTop: 50,
            }}                 
                style={styles.blockchainTokenDetail}>
                    <Text>Tokens</Text>
                    <Text>Nftss</Text>
                </ScrollView>
            
            </ScrollView>
            
              
              
               </ScrollView>
            
            {/* BottomBar */}
            <Pressable style={styles.bottombar}>
                <Pressable style={styles.walletContainer}>
                    <Ionicons name="wallet-outline" size={20} color="#fff" />
                </Pressable>
                <Pressable style={styles.exploreContainer}>
                    <Ionicons name="bulb-outline" size={20} color="#3c3c3c" />
                </Pressable>
                <Pressable style={styles.cardContainer}>
                    <Ionicons name="card-outline" size={20} color="#3c3c3c" />
                </Pressable>
                <Pressable style={styles.moreContainer}>
                    <Ionicons name="list-outline" size={20} color="#3c3c3c" />
                </Pressable>
                <Pressable style={styles.settingContainer}>
                    <Ionicons name="settings-outline" size={20} color="#3c3c3c" />
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
            
            backgroundColor:"#0b0b25",
            flexDirection:"row",
            columnGap:5,
            alignItems:"center",
            justifyContent:"space-evenly",
            
            position:"absolute",
            top:0,
            left:0,
            
            height:50,
            width:"100%",
            
            zIndex:3,
        },
        notificationContainer:{
            
            alignItems:"center",
            justifyContent:"center",
            
            height:"100%",
            width:"15%",
            
            
        },
        headerTittleContainer:{
            
            alignItems:"center",
            justifyContent:"center",
            
            height:"100%",
            width:"60%",
            
        },
        headerTittle:{
            
            color:"#fff",
            fontSize:"2.3",
            fontWeight:"900",
            
            
        },
        filterContainer:{
            
            alignItems:"center",
            justifyContent:"center",
            
            height:"100%",
            width:"15%",
            
            
        },
        //Main
        main:{
            
            backgroundColor:"#1c0e2a",
            height:"100%",
            width:"100%",
        },
        // BottomBar
        bottombar:{
            
            backgroundColor:"#0b0b25",
            borderRadius:23,
            flex:1,
            alignItems:"center",
            justifyContent:"space-evenly",
            flexDirection:"row",
            columnGap:5,
            
            position:"absolute",
            top:"90%",
            left:"50%",
            transform:([
              {translateX:"-50%"},
              {translateY:"-50%"},
            ]),
            
            height:50,
            width:"90%",
            
            zIndex:3,
        },
        walletContainer:{
            
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        exploreContainer:{
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        cardContainer:{
            
            backgroundColor:"red",
            borderRadius:"50%",
            
            height:60,
            width:60,
            
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        moreContainer:{
            
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        settingContainer:{
            
            justifyContent:"center",
            alignItems:"center",
            
            
        },
        
        
        
    });
    
    
    
    
    
    

    
