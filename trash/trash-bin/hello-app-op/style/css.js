import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';



const styles = StyleSheet.create({

    hello_controller: {

        flexDirection: row,
        columnGap: 3,
        borderRadius: 5,
        borderWidth: 1,

        position: "absolute",
        top: '50%',
        left: '50%',

        height: 50,
        width: 70,

    },
    hello_previousMedia_container: {

        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: 20,
    },
    hello_control_container: {

        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: 30,
    },
    hello_nextMedia_container: {

        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        width: 20,
    },

    hello_timeLine_container: {


        position: "absolute",
        bottom: 0,
        left: 0,

        height: 7,
        width: "100%",
    },
    hello_timeLine_follower: {

        position: "relative",
        top: 0,
        left: 0,

        height: "100%",
        width: "60%",


    },
    hello_timeLine_buffer: {

        position: "relative",
        top: 0,
        left: 0,

        height: "100%",
        width: "70%",


    },
    hello_timeLineFollower_circle: {

        backgroundColor: "#fff",
        borderRadius: "50%",

        position: "absolute",
        bottom: '50%',
        left: '50%',

        height: 13,
        width: 13,
    },
    media_player: {

        backgroundColor: "black",
        borderRadius: 3,

        position: "relative",

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
        borderWidth: 1,
        flexDirection: "row",

        height: 40,
        width: "100%",

    },
    top_right_tools: {

        flexDirection: "row",
        columnGap: 3,
        alignItems: 'center',
        justifyContent: "center",

        height: "100%",
        width: 70,
    },
    top_left_tools: {

        flexDirection: "row",
        columnGap: 3,
        alignItems: 'center',
        justifyContent: "center",

        height: "100%",
        width: 70,
    },
    media_tools_container: {

        flexDirection: "row",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,

        padding: 2,

        height: 35,
        width: 150,

    },
    media_tools_horizental: {

        columnGap: 5,

    },
    media_horizental_items: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",
        borderWidth: 1,

        height: 23,
        width: 23,

        margin: 2,
    },
    media_cancel_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",
        borderWidth: 1,

        height: 30,
        width: 30,

    },
    media_caption_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",
        borderWidth: 1,

        height: 30,
        width: 30,

    },
    media_search_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",
        borderWidth: 1,

        height: 30,
        width: 30,

    },
    media_menu_container: {

        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        borderColor: "white",
        borderWidth: 1,

        height: 30,
        width: 30,

    },
    center_control_tools: {

        borderWidth: 1,

        height: 120,
        width: "100%",

    },
    bottom_control_tools: {

        borderWidth: 1,

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
        backgroundColor: "#fff",

        height: "100%",
        width: "100%",
    },
    video: {

        position: "absolute",
        bottom: 0,
        left: 0,

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
});

export default styles;


