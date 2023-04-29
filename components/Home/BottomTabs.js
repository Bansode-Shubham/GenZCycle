import { View, TouchableOpacity ,Image,StyleSheet} from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'

export const bottomTabIcons = [
    {
      name: 'Home',
      active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
      inactive:
        'https://cdn.pixabay.com/photo/2018/11/13/21/44/instagram-3814060_960_720.png',
    },
    {
      name: 'Search',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
      name: 'Reels',
      active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
      name: 'Shop',
      active:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
      name: 'Profile',
      active:
        'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
      inactive:
        'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    },
  ]

const BottomTabs = ({icons}) => {
    const [activeTab,setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{uri: activeTab == icon.name ? icon.active:icon.inactive}}
             style={StyleSheet.icon} />
        </TouchableOpacity>
    )
  return (
    <View >
    <Divider width={1} orientation='vertical' />
    <View style ={styles.container}>
      {icons.map((icon,index) => (
        <Icon key={index} icon={icon} />
      ))}
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:'3%',
        zIndex:999,
        backgroundColor:'white',


    }
    ,
    container:{  
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        paddingTop:10,

    },
    icon:{
        width:30,
        height:30,

    }
}
)

export default BottomTabs