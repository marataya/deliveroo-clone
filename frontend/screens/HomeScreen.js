import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
// import { M } from 'react-native-heroicons/mini'
import Svg, { Circle, Path } from 'react-native-svg';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])


  return (
    <SafeAreaView style={tw`bg-white pt-7`}>
      {/* Header */}
      <View>

        <View style={tw`flex-row pb-3 items-center mx-4`}>
          <Image source={{ uri: 'https://links.papareact.com/wru' }}
            style={tw`w-7 h-7 bg-gray-300 mr-1 p-4 rounded-full`}
            className="h-7 w-7 bg-gray-300 mr-1 p-4 rounded-full"
          />
          <View style={tw`flex-1`}>
            <Text style={tw`font-bold text-gray-400 text-xs`}>Deliver Now!</Text>
            <Text style={tw`font-bold text-xl`}>Current Location
              <ChevronDownIcon size={20} color="#00ccbb" />
              {/* <Svg fill="none" height={20} width={20}>
                <Path strokeWidth={1.5} stroke="#00ccbb" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </Svg> */}
            </Text>
          </View>
          <UserIcon size={30} color="#00ccbb" />
        </View>

        {/* Search */}
        <View style={tw`flex-row items-center px-1`}>
          <View style={tw`flex-row flex-1 bg-gray-200 p-2`}>
            {/* <Svg fill="none" height={24} width={24} >
              <Path strokeWidth={1.5} stroke="#00ccbb" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </Svg> */}
            <MagnifyingGlassIcon stroke="#999" strokeWidth={2} size={20} style={tw`mr-3`} />
          </View>
          <AdjustmentsVerticalIcon className="bg-local" stroke="#00ccbb" strokeWidth={2} style={tw``} />

        </View>
      </View>


      {/* Body */}

      <ScrollView style={tw`bg-gray-100`}>
        {/* Component Categories */}
        <Categories />

        {/* Featured row */}
        <FeaturedRow
          id='001'
          title='Featured'
          description='Paid placements from our partners'
        />
        <FeaturedRow
          id='002'
          title='Tasty Discounts'
          description='Everyone has been enjoying these juicy discounts'
        />
        <FeaturedRow
          id='003'
          title='Offers near you!'
          description='Why not support our local restaurant tonight'
        />
        <FeaturedRow
          id='003'
          title='Offers near you!'
          description='Why not support our local restaurant tonight'
        />

      </ScrollView>
    </SafeAreaView>

  )
}

// elevation should work only on android
// const styles = StyleSheet.create({
//   container: {
//     elevation: 40,
//     height: 150,
//     backgroundColor: '#00B8D4',
//   },
//   svg: {
//     zOrder: 5
//   }
// })

export default HomeScreen