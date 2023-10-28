// Imports
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedScreen,AddScreen, FriendScreen, FollowerScreen, LibraryScreen } from "../screens/spaces/homeSpace";
import { ExploreScreen, FreeScreen, LocalScreen, MusicScreen, ShareScreen } from "../screens/spaces/mySpace";
import { MultiverseScreen,SearchScreen,ProfileScreen,SidebarScreen } from "../screens";
import { Telepot } from "../components";

// Variables 
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ShortStack = createNativeStackNavigator();
const GameStack = createNativeStackNavigator();
const LiveStack = createNativeStackNavigator();
const MyStack = createNativeStackNavigator();
const WorkStack = createNativeStackNavigator();
const StudyStack = createNativeStackNavigator();

// Spaces
function HomeSpace() {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            
            <HomeStack.Screen name="Feed" component={FeedScreen} />
            <HomeStack.Screen name="Add" component={AddScreen} />
            <HomeStack.Screen name="Friend" component={FriendScreen} />
            <HomeStack.Screen name="Follower" component={FollowerScreen} />
            <HomeStack.Screen name="Library" component={LibraryScreen} />
            
            
        </HomeStack.Navigator>
    );
}

function MySpace() {
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            
            <HomeStack.Screen name="Local" component={LocalScreen} />
            <HomeStack.Screen name="Music" component={MusicScreen} />
            <HomeStack.Screen name="Share" component={ShareScreen} />
            <HomeStack.Screen name="Free" component={FreeScreen} />
            <HomeStack.Screen name="Explore" component={ExploreScreen} />
            
            
        </HomeStack.Navigator>
    );
}

function WorkSpace({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>WorkSpace</Text>
              <Telepot navigationProp={navigation} />
            
        </View>

    );
}

function StudySpace({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>StudySpace</Text>
              <Telepot navigationProp={navigation} />
            
        </View>

    );
}

function ShortSpace({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>ShortSpace</Text>
              <Telepot navigationProp={navigation} />
            
        </View>

    );
}

function GameSpace({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>GameSpace</Text>
              <Telepot navigationProp={navigation} />
            
        </View>

    );
}

function LiveSpace({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>LiveSpace</Text>
              <Telepot navigationProp={navigation} />
            
        </View>

    );
}



// Temporary 
function DetailsScreen({ navigation, route }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Details Screen</Text>
              <Telepot navigationProp={navigation} />
    </View>
    );
}




// Main Functionality 
export default function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown: true}} />
                
                <Stack.Screen name="HomeSpace" component={HomeSpace} />
                <Stack.Screen name="ShortSpace" component={ShortSpace} options={{headerShown: true}}  />
                <Stack.Screen name="StudySpace" component={StudySpace} options={{headerShown: true}}  />
                <Stack.Screen name="WorkSpace" component={WorkSpace} options={{headerShown: true}}  />
                <Stack.Screen name="GameSpace" component={GameSpace} options={{headerShown: true}}  />
                <Stack.Screen name="MySpace" component={MySpace} />
                <Stack.Screen name="LiveSpace" component={LiveSpace} options={{headerShown: true}}  />
                
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Sidebar" component={SidebarScreen} />
                <Stack.Screen name="Multiverse" component={MultiverseScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
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
