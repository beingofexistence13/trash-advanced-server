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
import {
    Video,
    AVPlaybackStatus
} from 'expo-av';
import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';







// Copy & paste



// Main Functionality
export default function TikTokScreen({
    navigation, route
}) {


    const video = React.useRef(null);
    const [status,
        setStatus] = React.useState({});



    return (
        <View style={styles.container}>
        
         <TopBar navigationProp={navigation} headerTittle={route.name} />
         
    <View style={styles.videoContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: '../screens/video.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
        <Text>TikTok Clone for Shohan</Text>
        </View>
    );
}
    // Styles
    const styles = StyleSheet.create({
        
        
         container: {
            flex: 1,
            justifyContent: 'center',
          },
        fl: {
            width: "100%",
            height: "100%",
        },
        item: {

            marginTop: TopBar.currentHeight || 50,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",

            height: "150%",
            width: "100%",
        },
        title: {

            width: "100%",
            height: "100%",
        },
        scrollContainer: {

            height: "100%",
            width: "100%",

            paddingBottom: 25,
        },
        videoContainer: {

            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",

            height: "100%",
            width: "100%",
        },
        video: {
            height: "100%",
            width: "100%",
            
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
    });
    
    
    
    
    
    

    