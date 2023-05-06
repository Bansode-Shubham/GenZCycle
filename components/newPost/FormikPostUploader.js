import React, { useState } from 'react'
import {View, Text, Image, TextInput, Button} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'




const PLACEHOLDER_IMG ='https://www.shutterstock.com/image-vector/no-image-available-icon-template-260nw-1036735678.jpg'


const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')

})



const FormikPostUploader=({navigation})=>{
    const [thumbnailUrl, setThumbnailUrl]=useState(PLACEHOLDER_IMG)



    return(
       <Formik
        initialValues={{caption :'', imageUrl:''}}
        onSubmit={values => {
            console.log(values)
            console.log('your post was submitted succesfully 😎')
            navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}

         >
            {({ 
            handleBlur, 
            handleChange, 
            handleSubmit, 
            values,
             errors, 
             isValid,
             }) =>(
            <>
            <View 
                style={{ 
                margin: 20, 
                justifyContent:'space-between',
                flexDirection:'row',
            }}>
                <Image 
                source={{
                    uri: thumbnailUrl
                     ? thumbnailUrl
                     : PLACEHOLDER_IMG,
                     }} 
                style={{width: 100, height: 100}}
                />
            <View style={{flex : 1, marginLeft: 12}}>
            <TextInput
                style={{color:'black', fontSize: 20}} 
                placeholder='Write a captions..' 
                placeholderTextColor='black'
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
            />
            </View>
             </View>
             <Divider width={0.2} orientation='vertical'/>
             <TextInput
                onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                style={{color:'black', fontSize: 18}} 
                 placeholder='Enter Image Url' 
                 placeholderTextColor='black'
                 onChangeText={handleChange('imageUrl')}
                 onBlur={handleBlur('imageUrl')}
                 value={values.imageUrl}
             />
                {errors.imageUrl && (
                <Text style={{ fontSize: 10, color: 'red'}}>
                    {errors.imageUrl}
                </Text>
            )}

            <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
            </>    
            )}
       </Formik>
    )

}

export default FormikPostUploader