import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { Feather,AntDesign,FontAwesome } from '@expo/vector-icons';


export default function TopBar() {
  return (
    <View style={styles.TOPBAR_CONTAINER}>
        <View style={[styles.TOPBAR_ITEM_CONTAINER,styles.DRAWERNAVIGATION_TOGGLER_CONTAINER]}>
            <TouchableOpacity style={[styles.DRAWERNAVIGATION_ITEM_CONTAINER]}>
                <Feather name="menu" size={24} color="black" />
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={[styles.TOPBAR_ITEM_CONTAINER,styles.SCREEN_TITTLE_CONTAINER]}>
            Hello
        </TouchableOpacity>
        
        <View style={[styles.TOPBAR_ITEM_CONTAINER,styles.HEADERRIGHT_CONTAINER]}>
            
            
            <TouchableOpacity style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.MULTIVERSE_TOGGLER]}>
                <FontAwesome name="magic" size={15} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.SIDEBAR_TOGGLER]}>
                <Feather name="sidebar" size={15} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.SIDEBAR_TOGGLER]}>
                <AntDesign name="search1" size={15} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.HEADERRIGHT_ITEM_CONTAINER,styles.USER_TOGGLER]}>
                <Image 
                    style={[styles.USERLOGO]}
                    source={require("../../assets/multiverse.png")}
                />    
            </TouchableOpacity>
            
            
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  TOPBAR_CONTAINER: {
      
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        flexDirection:"row",
        
        position:"absolute",
        top:0,
        left:0,
        
        padding:5,
        
        height:50,
        width:"100%",
        
  },
  TOPBAR_ITEM_CONTAINER:{
      
      
        height:"100%",
      
  },
  DRAWERNAVIGATION_TOGGLER_CONTAINER:{
      
    
      alignItems:"center",
      justifyContent:"center",
      
      width:45,
  },
    DRAWERNAVIGATION_ITEM_CONTAINER:{
      
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
      
      height:40,
      width:40,
  },

  SCREEN_TITTLE_CONTAINER:{
      
      flex:1,
      alignItems:"start",
      justifyContent:"center",
      
      paddingLeft:3.5,
      
   
  },
  USERLOGO:{
    
    borderRadius:"50%",
    
    height:32,
    width:32,
  },
  HEADERRIGHT_CONTAINER:{
      
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"end",
      columnGap:2,
      
      width:"50%",
      
      
  },
  
  
  
  
  
  
  
  
  HEADERRIGHT_ITEM_CONTAINER:{
      
      backgroundColor:"#F4F4F4",
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
      
      height:30,
      width:30,
  },
  USER_TOGGLER:{
      
      backgroundColor:"#F4F4F4",
      borderRadius:"50%",
      alignItems:"center",
      justifyContent:"center",
      
      height:35,
      width:35,
  },
  
});







