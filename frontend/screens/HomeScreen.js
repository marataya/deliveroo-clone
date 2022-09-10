import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])


  return (
    <SafeAreaView>
      <View style={tw`elevation-40`}>
        <View style={tw`flex-row pb-3 items-center mx-4 android:mt-4 elevation-40`}>
          <Image source={{ uri: 'https://links.papareact.com/wru' }}
            style={tw`w-7 h-7 bg-gray-300 mr-1 p-4 rounded-full`}
            className="h-7 w-7 bg-gray-300 mr-1 p-4 rounded-full"
          />
          <View>
            <Text className="text-red-900 text-gray-400 text-xs" style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
            <Text style={tw`font-bold text-xl`}>Current Location</Text>
          </View>
        </View>
        {/* <View className="bg-stone-600" style={tw`bg-stone-600 elevation-40`}>
          <Text>ASDFAS</Text>
        </View> */}
      </View>
    </SafeAreaView>

  )
}

//elevation should work only on android
// const styles = StyleSheet.create({
//   container: {
//     elevation: 40,
//     height: 150,
//     backgroundColor: '#00B8D4',
//   }
// })

export default HomeScreen