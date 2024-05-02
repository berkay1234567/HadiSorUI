import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const _AuthLayout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen
    name='sign-in'
    options={{
      headerShown:false
    }}
    />
    <Stack.Screen
    name='sign-up'
    options={{
      headerShown:false
    }}
    />
    </Stack>

    <StatusBar backgroundColor='#161162' style='light'/>
    </>
  )
}

export default _AuthLayout