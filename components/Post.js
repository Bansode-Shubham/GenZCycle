import { View, Text ,StyleSheet,Image,TouchableOpacity, } from 'react-native'
import React from 'react';
import { Divider } from 'react-native-elements'
import PostHeader from './Home/PostHeader'
import PostImage from './Home/PostImage'

var like= require('../assets/pLike.png');
const postFooterIcons =[
  {
      name:'Like',
      
      imageUrl:'https://www.nicepng.com/png/detail/778-7786050_download-instagram-like-icon-png.png',
      likedImageUrl:'https://www.flaticon.com/free-icon/heart_2107774?term=like&related_id=2107774.png',
  },
  {
   name:'Comment',
   imageUrl:'data:image/png;base64,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',
  },
  {
  name:'Share',
  imageUrl:'data:image/png;base64,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'
  },
 {
  name:'Save',
  imageUrl:'https://pixlok.com/wp-content/uploads/2021/12/Save-Icon-093bnc3.png'
 }


]


const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
    <Divider width={1} 
    orientation='vertical'/>
    <PostHeader post={post} />
    <PostImage post={post} />
    <View style={{marginHorizontal:15,marginTop:10}} >
    <PostFooter />
      </View>
      <Likes post={post} />
      <Caption post={post} />
      <CommentsSection post={post} />
      <Comments post={post} />
      
      </View>
  )
}

const PostFooter =() => (
  <View style={{flexDirection : 'row'}}>
  <View style={styles.leftFooterIconsContainer}>
  <Icon imgStyle={styles.footerIcon} 
  imgUrl={postFooterIcons[0].imageUrl} />
<Icon imgStyle={styles.footerIcon}
 imgUrl={postFooterIcons[1].imageUrl} />
<Icon imgStyle={styles.footerIcon}
 imgUrl={postFooterIcons[2].imageUrl} />
 </View>
 <View style={{ flex:1,alignItems:'flex-end'}}>
 <Icon imgStyle={styles.footerIcon}
 imgUrl={postFooterIcons[3].imageUrl} />

 </View>

</View>
)
const Icon = ({imgStyle,imgUrl}) => (
  <View>
  <TouchableOpacity>
    <Image style={imgStyle} 
    source={{uri :imgUrl}} />
    
    

  </TouchableOpacity>
  </View>

)

const Likes = ({post}) => (
  <View style ={{flexDirection:'row',marginTop:4}}>
  <Text style ={{color:'black' ,fontWeight:'600'}}>
  {post.likes} Likes </Text>

</View>
)


const CommentsSection =({post}) => (
  <View style={{ marginTop :5}}>
  {!!post.comments.length && (
  <Text style= {{color:'gray'}}>
  View {post.comments.length > 1 ? 'all' : ''}  {post.comments.length} {post.comments.length > 1 ? 'comments' :'comment'}
  </Text>
  )} 
  </View>
)

const Comments =({post}) => (
  <>
    {post.comments.map((comment,index) =>(
    <View key={index} style={{flexDirection :'row',marginTop:5}}>
      <Text style ={{color:'gray'}}>
      <Text style={{ fontWeight:'600'}} >{comment.user}</Text>{' '}
      {comment.comment}

      </Text>
    </View>))}
  </>

)

const Caption = ({post}) => (
<View style={{marginTop:5}}>
<Text style = {{color:'black'}}>
<Text style ={{fontWeight:'600'}}> 
{post.user}</Text>
<Text> {post.caption}</Text>
</Text>
</View>  

)




const styles = StyleSheet.create({
  footerIcon:{
    width:33,
    height:33,
  },
  leftFooterIconsContainer:{
    flexDirection:'row',
    width:'32%',
    justifyContent:'space-between',
  }
})

export default Post