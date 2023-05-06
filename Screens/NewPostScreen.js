import {SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}

export default NewPostScreen