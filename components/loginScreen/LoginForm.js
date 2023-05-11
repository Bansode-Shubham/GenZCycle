import { View,Alert , Text, TextInput,StyleSheet, Pressable, TouchableOpacity } from 'react-native';

import React ,{ useState} from 'react';
import { Button } from 'react-native-elements';
import  Validator  from 'email-validator';
import {Formik} from 'formik';
import * as Yup from 'yup';
 //import firebase from '../../firebase';

const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is requried'),
        password:Yup.string()
        .required().min(6,'Your password has to have at least 6 characters')

    })

    // const onLogin = async(email,password) => {
    //     try{
    //         await firebase.auth().signInWithEmailAndPassword(email,password)
    //         console.log("fb login successfull",email,password)
    //     }catch(error){
    //         Alert.alert(error.message)
    //     }
    // }
  return (
    <View style={styles.wrapper} >
    <Formik
    initialValues={{email:'',password:''}}
    onSubmit={values => {
        console.log(values)
    }}
    validationSchema={LoginFormSchema}
    validateOnMount={true}  
    >
    {({handleChange,handleBlur,handleSubmit,values,isValid})=>(
    <>
    <View style={[styles.inputField,{
     borderColor:values.email.length < 1 || Validator.validate(values.email) ? '#ccc': 'red'


    }]}>
      <TextInput placeholderTextColor='#444'
      placeholder='Phone number, username or email'
      autoCapitalize='none'
      keyboardType='email-address'
      textContentType='emailAddress'
      autoFocus={true}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      value={values.email}
       />
      </View>

      <View style={[styles.inputField,
      {borderColor:1>values.password.length ||values.password.length >=6
      ?'#ccc':'red',}]}>
      <TextInput placeholderTextColor='#444'
      placeholder='Password'
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={true}
      textContentType='password'
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      value={values.password}
/>
 </View>
 <View style={{alignItems:'flex-end',marginBottom:30}}>
    <Text style={{color:'#6BB0F5'}}>
        Forgot password
    </Text>
</View>
     
<Pressable
titleSize={20}
style={(styles.button(isValid))}
onPress={handleSubmit}
disabled={!isValid}
>
    <Text style={styles.buttonText}>Log In</Text>
</Pressable>
      
      <View style={styles.signupContainer}>
      <Text>Don't have an account?</Text>
      <TouchableOpacity
       onPress={() => navigation.push('SignupScreen')}>
        <Text style={{color:'#6BB0F5'}}> Sign Up </Text>
      </TouchableOpacity>
      </View>
      </>
      )}
      </Formik>
    </View>
  )
}
 const styles=StyleSheet.create({
wrapper:{
    marginTop:80,
},
inputField:{
    boraderRadius:4,
    padding:12,
    backgroundColor:'#FAFAFA',
    marginBottom:10,
    borderWidth:1,

},
button: isValid => ({
    backgroundColor:  isValid ?'#0096F6': '#9ACAF7',
    alignItems:'center',
    justifyContent:'center',
    minHeight:42,
    borderRadius:4,


}),
signupContainer:{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    marginTop:50,
},
buttonText:{
    fontWeight:'600',
    color:'#fff',
    fontSize:20,
}
 })
export default LoginForm