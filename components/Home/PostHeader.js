import { StyleSheet,View,Text,Image, } from "react-native"
const PostHeader =({post}) => (
    <View style={{ 
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center',
        }}>
        <View style ={{flexDirection:'row',
        alignItems:'center',
        }}>
        <Image source={{ uri:post.profile_picture}}
         style={styles.story} />
        <Text style={{
        marginLeft:5,
        fontWeight:'700'}}>{post.user}  </Text>
        <Text style={{fontSize:20}}>{post.dailyKm}{post.badge}</Text>
      
        </View>

        <Text style={{color:'white',fontWeight:'900'}}>...</Text>
    </View>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:40,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:'yellow'





    }
})

export default PostHeader