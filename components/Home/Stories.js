import React from 'react';
import {Image ,View,Text ,StyleSheet ,ScrollView } from 'react-native';
import { USER } from '../../Data/User';


const Stories =() =>{
    return(
        <View style={{marginBottom: 13}}>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        >
        {USER.map((story,index) => (
            <View key={index} style ={{alignItems:'center'}}>
            <Image source={{uri:story.image}} style={styles.story} />
           <Text style = {{color:'black'}}>{
            story.user.length > 11 
            ? story.user.slice(0,10).toLowerCase() + '...'
            :story.user.toLowerCase()}
             </Text>
            </View>))}
           
            </ScrollView>
          
        </View>
    )
}
 const styles = StyleSheet.create({
    story:{
        width:80,
        height:80,
        borderRadius:40,
        marginLeft:6,
        borderWidth:3,
        borderColor:'yellow'





    }

 })

export default Stories