import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'
import { formatCurrency } from 'react-native-format-currency'

const BasketIcon = () => {
  const items = useSelector(selectBasketItems)
  const navigation = useNavigation()
  const total = useSelector(selectBasketTotal)
  const [valueFormattedWithSymbol] = formatCurrency({ amount: Number(total).toFixed(2), code: "USD" });

  return (
    <View style={tw`absolute bottom-10 z-1 w-full`}>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} className='justify-between' style={tw`mx-5 bg-[#0cb] p-4 rounded-lg flex-row items-center justify-around`}>
        <Text style={tw`text-white text-lg font-extrabold py-1 px-2 bg-[#01A296]`}>{items.length}</Text>
        <Text style={tw`flex-1 text-white text-lg font-extrabold text-center`}>View Basket</Text>
        <Text style={tw`text-lg text-white font-extrabold`}>{valueFormattedWithSymbol}</Text>
      </TouchableOpacity>

    </View>
  )
}

export default BasketIcon