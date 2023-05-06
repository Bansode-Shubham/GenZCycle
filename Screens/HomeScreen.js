import React from 'react';
import { SafeAreaView,StyleSheet} from 'react-native';
import  Header  from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Post';
import { ScrollView } from 'react-native';
import { POST } from '../Data/posts';
import BottomTabs, { bottomTabIcons } from '../components/Home/BottomTabs';

const HomeScreen = ({navigation}) =>{
    return(
    <SafeAreaView style = {styles.container}>
         <Header navigation={navigation} />
         <Stories />
         <ScrollView>
         {POST.map((post,index) => (
            <Post post={post} key={index} />
            ))}
         
         </ScrollView>
         <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
    )
}
 const styles = StyleSheet.create({
    container :{
        backgroundColor: 'white',
        flex:1
    }
 })

export default HomeScreen