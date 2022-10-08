import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 4000)
  
  }, [])
  
  return (
    <SafeAreaView style={tw`bg-[#0cb] flex-1 justify-center items-center`}>
      <Animatable.Image source={require('../assets/stewiesnake.gif')}
        animation='slideInUp'
        iterationCount={1}
        className=''
        style={tw`w-96 h-96`}
      />
      <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        style={tw`text-lg my-10 font-extrabold text-white mb-5`}
      >
        Placing Order
      </Animatable.Text>
      <Progress.Circle indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen