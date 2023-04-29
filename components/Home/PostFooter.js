import {  TouchableOpacity,Image ,StyleSheet} from 'react-native'
import React from 'react'
import {postFooterIcons} from '../../Data/postFooterIcons'

const PostFooter = () => {
  return(  <Icon imgStyle={styles.footerIcon} 
    imageUrl={postFooterIcons[0].imageUrl} />
)}

const Icon =({imgStyle,imgUrl}) => {
    return(
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri:imgUrl}} />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    footerIcon:{
        width:33,
        height:33
 },
})

export default PostFooter