import { View, Text, ScrollView,Image } from 'react-native'
import { images } from '../../constants/constants'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import useKeyboardStatus from '../keyboardStatus';
import { Link } from 'expo-router'


const SignIn = () => {
  const [form, setform] = useState({
    email:'',
    password:''
  })
  const [isSubmitting, setisSubmitting] = useState(false)
  const isKeyboardActive = useKeyboardStatus();


  const submit = () =>{

  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[53vh] px-4 my-1 '>
        <Image 
        source={images.hadiSorLogo3}
        resizeMode='contain' className='w-[200px] h-[70px]'
        />
        <Text className={`text-xl text-white text-semibold
        ${isKeyboardActive?'mt-1':'mt-10'} font-psemibold`}>Log in to HadiSor</Text>
        <FormField
          title='Email'
          value={form.email}
          handleChangeText={(e) => setform({...form,
          email:e})}
          otherStyles={isKeyboardActive?'mt-1':'mt-7'}
          keyboardType='email-adress'
        />
        <FormField
          title='Password'
          value={form.password}
          handleChangeText={(e) => setform({...form,
          password:e})}
          otherStyles={isKeyboardActive?'mt-1':'mt-7'}
        />
        <CustomButton
        title='Sign In'
        handlePress={submit}
        containerStyles={isKeyboardActive?'mt-1':'mt-7'}
        isLoading={isSubmitting}
        />
        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Don't have an account?
          </Text>
          <Link href='/sign-up' className='text-lg
          font-psemibold text-secondary'>Sign Up</Link>
        </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn