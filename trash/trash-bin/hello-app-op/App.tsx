// Imports
import * as React from 'react';
import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


// Main Function And Styles
export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <View style={styles.container}>
               
                
                
                <View style={styles.media_player_big}>
                        <BlurView intensity={10} tint="light" style={styles.hello_timeLine_containerBig}>
                            
                            <View style={styles.hello_timeLine_containerSmall}>
                            
                                <View style={styles.hello_timeLine_buffer}></View>
                                <View style={styles.hello_timeLine_follower}>
                                    <View style={styles.hello_timeLineFollower_circle}></View>
                                </View>
                            
                            </View>
                            
                        </BlurView>
                    <View style={styles.media_player_small}>
                        <Video
                          ref={video}
                          style={styles.video}
                          source={{
                            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                          }}
                          resizeMode="contain"
                          isLooping
                          onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                        <View style={styles.rightDoubleClick_container}>
                            
                            <AntDesign name="forward" size={20} color="#fff" />
                            <Text> +10 </Text>
                        </View>
                        <View style={styles.leftDoubleClick_container}>
                            <AntDesign name="backward" size={20} color="#fff" />
                            <Text> -10 </Text>
                            
                        </View>
                        
                                <View style={styles.hello_controller}>
                                    <View style={styles.hello_previousMedia_container}>
                                    
                                        <AntDesign name="stepbackward" size={18} color="#fff" />
                                    
                                    </View>
                                    <View style={styles.hello_control_containerBig}>
                                        <View style={styles.hello_control_containerSmall} onPress={()=> alert("Op Pause")}>
                                        {
                                            status.isPlaying ? <Ionicons onPress={()=> status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} name="pause" size={25} color="#fff" /> : <Ionicons onPress={()=> status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} name="play" size={25} color="#fff" />
                                        }
                                        </View>
                                    </View>
                                    <View style={styles.hello_nextMedia_container}>
                                    
                                        <AntDesign name="stepforward" size={18} color="#fff" />
                                   
                                    </View>
                                </View>
                        <View style={styles.hello_control_tools}>
                            <View style={styles.top_control_tools}>
                                <View style={styles.top_left_tools}>
                                    <View style={styles.media_cancel_container}>
                                        <AntDesign name="down" size={20} color="#fff" />
                                    </View>
                                    <View style={styles.media_caption_container}>
                                        <FontAwesome5 name="closed-captioning" size={20} color="#fff" />
                                    </View>
                                </View>
                                
                                <BlurView intensity={20} tint="light" style={styles.media_tools_container}>
                                    <ScrollView style={styles.media_tools_horizental} horizontal={true}>
                                        
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="add-outline" size={16} color="#fff" />
                                            
                                        </View>
                                       <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="headset-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="rocket-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="lock-open-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="megaphone-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="image-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="alarm-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="aperture-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="flame-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="flashlight-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="gift-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="snow-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="transgender-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="language-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="game-controller-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="cart-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="git-pull-request-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="pie-chart-outline" size={16} color="#fff" />
                                            
                                        </View>
                                        <View style={styles.media_horizental_items}>
                                            
                                           <Ionicons name="save-outline" size={16} color="#fff" />
                                            
                                        </View>
                                       
                                        
                                    </ScrollView>
                                </BlurView>
                                <View style={styles.top_right_tools}>
                                    <View style={styles.media_search_container}>
                                        
                                        <MaterialCommunityIcons name="telescope" size={20} color="#fff" />
                                        
                                    </View>
                                    <View style={styles.media_menu_container}>
                                        
                                        <Entypo name="dots-three-vertical" size={20} color="#fff" />
                                        
                                    </View>
                                </View>
                            </View>
                            <View style={styles.center_control_tools}>
                            
                            </View>
                            <View style={styles.bottom_control_tools}>
                                <View style={styles.bottom_tools_left}>
                                    <View style={styles.media_time_container}>
                                        <Text style={styles.media_time_left}>00:00</Text>
                                        <Text style={styles.media_time_center}>/</Text>
                                        <Text style={styles.media_time_right}>00:00</Text>
                                    </View>
                                    <View style={styles.media_divide_container}>
                                    
                                        <Text style={styles.media_time_center}>Intro dypsuzotsrzit</Text>
                                    
                                    </View>
                                
                                </View>
                                <View style={styles.bottom_tools_right}>
                                    <View style={styles.media_mark_container}>
                                    
                                        <Ionicons name="map-outline" size={17} color="#fff" />
                                   
                                    </View>
                                    <View style={styles.media_fullScreen_container}>
                                        <MaterialIcons name="fullscreen" size={20} color="#fff" />
                                    </View>
                                    
                                </View>
                                
                                
                            </View>
                        </View>
                   </View>
                </View>
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
                <BlurView intensity={50} tint="light" style={styles.blurContainer}>
                    <View style={styles.bottomTabContainer}>
                       
                        <Ionicons name="home" size={25} color="#fff" />
                        <Text style={styles.text}>1 Text</Text>
                     
                       </View>
                     <View style={styles.bottomTabContainer}>
                       
                        <AntDesign name="umbrella" size={25} color="#fff" />
                        <Text style={styles.text}>1 Text</Text>
                     
                       </View>
                     <View style={styles.bottomTabContainer}>
                       
                        <AntDesign name="water" size={25} color="#fff" />
                        <Text style={styles.text}>1 Text</Text>
                     
                       </View>
                     <View style={styles.bottomTabContainer}>
                       
                        <AntDesign name="people" size={25} color="#fff" />
                        <Text style={styles.text}>1 Text</Text>
                     
                       </View>
                     <View style={styles.bottomTabContainer}>
                       
                        <Ionicons name="tropy" size={25} color="#fff" />
                        <Text style={styles.text}>1 Text</Text>
                     
                     </View>
                     <View style={styles.bottomTabContainer}>
                       
                        <Ionicons name="library" size={25} color="#fff" />
                        <Text style={styles.text}>1 Text</Text>
                     
                     </View>
                     
                </BlurView>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({

    rightDoubleClick_container: {
        
        alignItems:"center",
        justifyContent:"start",
        backgroundColor: "red",
        borderRadius: "50%",
        
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [
            { translateY: "-50%" },
        ],
        
        padding:15,
        
        height: "200%",
        width: "200%",
        zIndex: 30,
    },
    leftDoubleClick_container: {
        
        alignItems:"center",
        justifyContent:"end",
        backgroundColor: "green",
        borderRadius: "50%",
        
        position: "absolute",
        top: "50%",
        left: "-150%",
        transform: [
            { translateY: "-50%" },
        ],
        
        padding:15,
        
        height: "200%",
        width: "200%",
        zIndex: 30,
    },
    hello_controller: {
        
        flexDirection: "row",
        borderRadius: 5,
        
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [
            { translateX: "-50%" },
            { translateY: "-50%" },
        ],
        height: 55,
        width: 100,
        zIndex: 10,
    },
    hello_previousMedia_container: {

        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: "25%",
    },
    hello_control_containerBig: {
        
        alignItems: "center",
        justifyContent: "center",
        
        height: "100%",
        width: "50%",
    },
    hello_control_containerSmall: {

        backgroundColor: "black",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",

        height: 45,
        width: 45,
    },
    hello_nextMedia_container: {

        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: "25%",
    },
    hello_timeLine_containerBig: {
        
        position: "absolute",
        bottom: 0,
        left: 0,
        
        height: 3,
        width: "100%",
        
        zIndex:100,
    },
    hello_timeLine_containerSmall: {
        
        position: "relative",
        bottom: 0,
        left: 0,
        
        height: "100%",
        width: "100%",
    },
    hello_timeLine_follower: {
        
        borderRadius:5,
        backgroundColor: "#fff",
        
        position: "relative",
        top: 0,
        left: 0,
        
        height: "100%",
        width: "10%",
        
    },
    hello_timeLine_buffer: {
        
        borderRadius:5,
        backgroundColor: "yellow",
        
        position: "absolute",
        top: 0,
        left: 0,
        
        height: "100%",
        width: "70%",
        
    },
    hello_timeLineFollower_circle: {
        
        backgroundColor: "#fff",
        borderRadius: "50%",
        position: "absolute",
        top: '50%',
        left: "100%",
        transform: [
            { translateY: "-50%" },
        ],
        
        height: 20,
        width: 20,
    },
    media_player_big: {
        
        
        position: "relative",
        top: 0,
        left: 0,
        
        height: 200,
        width: "100%",
        
    },
    media_player_small: {
        
        overflow: "hidden",
        position: "relative",
        top: 0,
        left: 0,
        
        height: 200,
        width: "100%",
        
    },
    hello_control_tools: {


        position: "absolute",
        top: 0,
        left: 0,

        height: '100%',
        width: '100%',

    },
    top_control_tools: {

        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",

        height: 40,
        width: "100%",

    },
    top_right_tools: {

        flexDirection: "row",
        columnGap: 1,
        alignItems: 'center',
        justifyContent: "end",

        height: "100%",
        width: 65,
    },
    top_left_tools: {

        flexDirection: "row",
        columnGap: 1,
        alignItems: 'center',
        justifyContent: "start",

        height: "100%",
        width: 65,
    },
    media_tools_container: {

        flexDirection: "row",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,

        height: 30,
        width: 190,

    },
    media_tools_horizental: {


    },
    media_horizental_items: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "#fff",
        borderWidth: 1,

        marginLeft: 3,
        marginRight: 3,
        marginTop: 2.5,

        height: 23,
        width: 23,

    },
    media_cancel_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",

        height: 27,
        width: 27,

    },
    media_caption_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",

        height: 27,
        width: 27,

    },
    media_search_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",

        height: 27,
        width: 27,

    },
    media_menu_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",

        height: 27,
        width: 27,

    },
    center_control_tools: {

        alignItems: "center",
        justifyContent: "center",
        borderColor: "#fff",

        height: 120,
        width: "100%",

    },
    bottom_control_tools: {

        borderColor: "#fff",

        position: "relative",

        height: 40,
        width: "100%",

    },
    bottomTabIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,

        width: 30,
        height: 30,

        zIndex: 1,
    },
    bottomTabGlow: {

        backgroundColor: "yellow",
        shadowColor: "yellow",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 16,

        position: "absolute",
        top: 0,
        left: 65,

        width: 30,
        height: 30,

        zIndex: 0,
    },
    container: {
        position: "relative",
        backgroundColor: "black",

        height: "100%",
        width: "100%",
    },
    video: {

        position: "absolute",
        top: "52.5%",
        left: "50%",
        transform: [
            { translateX: "-50%" },
            { translateY: "-50%" },
        ],

        height: "100%",
        width: "100%",
    },
    blurContainer: {

        position: "absolute",
        bottom: 0,
        left: 0,

        flexDirection: "row",
        alignItems: "center",

        height: "8%",
        width: "100%",

    },
    text: {

        color: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    bottomTabContainer: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        rowGap: 5,

        height: "100%",
        width: "28%"

    },
    bottom_tools_left: {

        alignItems: "center",
        justifyContent: "start",
        flexDirection: "row",
        columnGap: 3,

        position: "absolute",
        top: 0,
        left: 0,

        height: "100%",
        width: "70%",
    },
    bottom_tools_right: {

        alignItems: "center",
        justifyContent: "end",
        flexDirection: "row",
        columnGap: 1,

        position: "absolute",
        top: 0,
        left: "70%",

        height: "100%",
        width: "30%",
    },
    media_time_container: {

        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        columnGap: 1,

        height: "100%",
        width: "40%",
    },
    media_time_left: {

        color: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    media_time_center: {

        color: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    media_time_right: {

        color: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    media_mark_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",

        height: 30,
        width: 30,

    },
    media_fullScreen_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",

        height: 30,
        width: 30,

    },
    media_fullScreenExit_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",

        height: 30,
        width: 30,

    },

});


