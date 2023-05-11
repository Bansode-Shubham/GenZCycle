import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikPostUploader navigation={navigation}/>
    </View>
   
  )
}

const Header = ({navigation}) => (
    <View style={styles.headContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image 
        source={{uri:'https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1767523-1502427.png'}} 
        style={{width:30,height:30}}
    />
    </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
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

    },

})

export default AddNewPost