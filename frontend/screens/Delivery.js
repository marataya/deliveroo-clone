import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const Delivery = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  return (
    <View style={tw`bg-[#0cb] flex-1`}>
      <SafeAreaView style={tw`z-50`}>
        <View style={tw`flex-row justify-between items-center p-5`}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XCircleIcon color="white" size={35} />
          </TouchableOpacity>
          <Text style={tw`text-lg text-white font-light`}>Order Help</Text>
        </View>


        <View style={tw`bg-white mx-5 my-2 rounded-md p-5`}>
          <View style={tw`flex-row justify-between`}>
            <View>
              <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
              <Text style={tw`text-4xl font-bold`}>35-40 min</Text>
            </View>
            <Image source={{ uri: "https://links.papareact.com/fls" }} style={tw`h-20 w-20`} />
          </View>
          <Progress.Bar indeterminate={true} color='#0cb' />
          <Text>Your order at {restaurant.title} is being prepared</Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType='mutedStandard'
        style={tw`flex-1 -mt-10 z-0`} >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
          pinColor="#0cb"
          style={tw`z-50`}
        />
      </MapView>

      <SafeAreaView style={tw`bg-white flex-row items-center h-28`}>
        <Image source={{uri: "https://links.papareact.com/wru"}} style={tw`h-12 w-12 p-4 rounded-full mx-2`}/>
        <View style={tw`flex-1`}>
          <Text style={tw`text-lg`}>Marat</Text>
          <Text style={tw`text-gray-400`}>Your rider</Text>
        </View>
        <Text style={tw`text-[#0cb] text-lg mr-5 font-bold`}>Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default Delivery