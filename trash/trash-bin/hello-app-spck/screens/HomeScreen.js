import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Hello I am HomeScreen of Hello App</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101218',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff",
    },

});
