import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import tw from 'twrnc'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { useDispatch, useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { selectRestaurant, setRestaurant } from '../features/restaurantSlice'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()

  const {
    params: { id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat
    }
  } = useRoute()


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  useEffect(() => {
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    }))
  }, [])

  return (
    <>
      {items.length > 0 && <BasketIcon />}
      <ScrollView>
        <View style={tw`relative`}>
          <Image source={{ uri: urlFor(imgUrl).url() }} style={tw`w-full h-55 bg-gray-300 p-4`} />
          <TouchableOpacity style={tw`absolute top-7 left-3 bg-gray-100 rounded-full opacity-75`}
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={30} stroke="#00ccbb" strokeWidth={3} />
          </TouchableOpacity>
        </View>

        <View style={tw`bg-white`}>
          <View style={tw`px-4 pt-4`}>
            <Text style={tw`text-3xl font-bold`}>{title}</Text>
            <View style={tw`flex-row my-1`}>
              <View style={tw`flex-row items-center`}>
                <StarIcon stroke="#00ccbb" size={20} strokeWidth={2} fill="#0cb" opacity={.5} />
                <Text><Text style={tw`text-green-500 text-sm`}>{rating}</Text> - {genre}</Text>
              </View>
              <View style={tw`flex-row flex-shrink items-center`}>
                <MapPinIcon stroke="#00ccbb" size={20} strokeWidth={2} fill="#0cb" opacity={.5} />
                <Text style={tw`text-gray-500 text-xs`}>Nearby - {address}</Text>
              </View>
            </View>
            <Text style={tw`text-zinc-900 text-sm font-bold mt-2 pb-4`}>{short_description}</Text>
          </View>

          <TouchableOpacity style={tw`flex-row items-center p-4 border border-gray-300`}>
            <QuestionMarkCircleIcon size={30} stroke="#00ccbb" strokeWidth={2} />
            <Text className='border-b' style={tw`flex-1 pl-2 text-base font-bold`}>Have a food allergy?</Text>
            <ChevronRightIcon size={30} stroke="#00ccbb" strokeWidth={2} />
          </TouchableOpacity>
        </View>

        <View style={tw`pb-36`}>
          <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>
            Menu
          </Text>

          {/* Dishrow */}
          {dishes?.map(dish => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}

        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen