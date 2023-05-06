import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen'
import NewPostScreen from './Screens/NewPostScreen';
import SignedInStack from './navigation';

export default function App() {
  return (
    <SignedInStack></SignedInStack>
  )
  
}



