import { StatusBar } from 'expo-status-bar';
import {Redirect,router} from 'expo-router';
import {  ScrollView, Image, View,Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants/constants';
import CustomButton from '../components/CustomButton';
export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className='w-full justify-center
      items-center min-h-[85vh] px-4'>
          <Image 
          source={images.hadiSorLogo3}
          className='w-[300px] h-[140px]'
          resizeMode='contain'
          />

          <Image
          source={images.cards}
          className='max-w-[380px] w-full h-[300px]'
          resizeMode='contain'
          />

          <View className='relative mt-5'>
          <Text className='text-3xl text-white font-bold text-center'>
            Answer Endless Possibilities with {' '}
            <Text className='text-secondary-200'>
               HadiSor
            </Text>
          </Text>
          <Image
          source={images.path}
          className='max-w-[136px] w-full h-[15px] absolute -bottom-2 left-16'
          resizeMode='contain'
          />
          </View>
          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where creativity meets innovation:
            embark on a journey of limitless exploration with HadiSor
          </Text>
          <CustomButton
          title="Continue with Email"
          handlePress={() => router.push("/sign-in")}
          containerStyles='w-full mt-7'
          />
      </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}


