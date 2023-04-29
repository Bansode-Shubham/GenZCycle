import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header />
    </View>
   
  )
}

const Header = () => (
    <View style={styles.headContainer}>
    <TouchableOpacity>
    <Image source={{
        uri:'https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767523-1502427.png'}} 
        style={{width:30,height:30}}
    />
    </TouchableOpacity>
      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
)
const styles = StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    headContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    headerText:{
        fontWeight:'700',
        fontSize:20,
        marginRight:25,


    }

})
export default AddNewPost