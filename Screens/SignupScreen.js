import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const LOGO = 'https://static.vecteezy.com/system/resources/previews/015/393/860/non_2x/creative-bicycle-with-cycling-race-stylized-symbol-logo-design-concept-illustration-vector.jpg'


const SignupScreen = () => (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image source={{uri:LOGO ,height:200,width:200}} />
</View>
<SignupForm />
</View>
     )
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
       // paddingTop:20,
        paddingHorizontal:12,


    },
    logoContainer:{
        alignItems:'center',
        marginTop:20,

    }
    

})



export default SignupScreen
