import { View, Text ,Image} from 'react-native'
import React from 'react'

const PostImage = ({post}) => (
   <View style={{width:'100%',
   height:450,
   }} >
    <Image source={{uri:post.imageUri}} style={{height:'100%',resizeMode:'cover'}} />
    </View>
  )


export default PostImage