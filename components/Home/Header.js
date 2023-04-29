import React from "react";
import { View ,Text ,Image,StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
    return(
        <View style ={styles.container}>
        <View >
           <TouchableOpacity>
           <Image style={styles.logo} 
           source={require('../../assets/bicycle.png')}
           />
           
          </TouchableOpacity>
          <Text style={{fontSize:15}}>🎖️Todays Cycling 25Km </Text>
          </View>

          <View style ={styles.iconsContainer}>
          
          <TouchableOpacity>
          <Image 
          source={require('../../assets/add.png')}
          style={styles.icon}
          />

          </TouchableOpacity>
         
          <TouchableOpacity>
          <Image 
          source={require('../../assets/thumbs-up.png')}
          style={styles.icon}
          />

          </TouchableOpacity>
         
          <TouchableOpacity>
          <Image 
          source={require('../../assets/chat.png')}
          style={styles.icon}
          />

          </TouchableOpacity>
          
          </View>
        </View>
   
    )


}


const styles = StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal: 20


    },
    iconsContainer:{
        flexDirection:'row'
    },
    logo:{
        width:50,
        height:50,
        resizeMode:'contain'
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain'

    }
})


export default Header