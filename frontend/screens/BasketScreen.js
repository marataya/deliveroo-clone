import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { selectRestaurant } from '../features/restaurantSlice'
import tw from 'twrnc'
import { XCircleIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { formatCurrency } from 'react-native-format-currency'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const total = useSelector(selectBasketTotal)

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch()

  if (items.length === 0) return null


  const formatNumberToCurrency = (number) => {
    const [valueFormattedWithSymbol] = formatCurrency({ amount: number, code: "USD" });
    return valueFormattedWithSymbol
  }

  useEffect(() => {
    console.log('items' + " ::: ", items);

    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {})

    console.log('groupedItems' + " ::: ", groupedItems);
    setGroupedItemsInBasket(groupedItems)

  }, [items])

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100 ios:pb-3`}>
        <View style={tw`p-5 border-b border-[#0cb] bg-white`}>
          <View>
            <Text style={tw`text-lg font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} style={tw`rounded-full bg-gray-100 absolute top-5 right-5`}>
            <XCircleIcon stroke="#0cb" strokeWidth={3} size={35} />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row items-center justify-between bg-white my-5 px-4 py-3`}>
          <Image source={{ uri: "https://links.papareact.com/wru" }} style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`} />
          <Text style={tw`flex-1 px-2`}>Deliver in 35-45 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-[#0cb]`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} style={tw`flex-row items-center justify-between bg-white py-2 px-5`}>
              <Text>{items.length} x</Text>
              <Image style={{ borderWidth: 2, borderColor: "red" }} source={{ uri: urlFor(items[0]?.image).url() }} style={tw`h-12 w-12`} />
              <Text style={tw`flex-1`}>{items[0]?.name}</Text>
              <Text style={tw`text-gray-600`}>{formatNumberToCurrency(items[0]?.price)}</Text>
              <TouchableOpacity>
                <Text onPress={() => dispatch(removeFromBasket({ id: key }))} style={tw`text-[#0cb] text-base`}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5`}>
          <View style={tw`flex-row justify-between py-1`}>
            <Text style={tw`text-gray-500`}>Subtotal</Text>
            <Text style={tw`text-gray-500`}>{formatNumberToCurrency(Number(total).toFixed(2))}</Text>
          </View>
          <View style={tw`flex-row justify-between py-1`}>
            <Text style={tw`text-gray-500`}>Delivery fee</Text>
            <Text style={tw`text-gray-500`}>{formatNumberToCurrency(5.99)}</Text>
          </View>
          <View style={tw`flex-row justify-between py-1`}>
            <Text>Total</Text>
            <Text style={tw`font-extrabold`}>{formatNumberToCurrency(Number(total+5.99).toFixed(2))}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} style={tw`rounded-lg p-4 bg-[#0cb] mt-5`}>
            <Text>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen