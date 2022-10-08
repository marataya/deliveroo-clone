import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { formatCurrency } from "react-native-format-currency";
import { urlFor } from '../sanity';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../features/basketSlice';


const DishRow = ({ id, name, description, price, image }) => {
  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] = formatCurrency({ amount: price, code: "USD" });
  const [isPressed, setIsPressed] = useState(false)
  const dispatch = useDispatch()
  const items = useSelector(state => selectBasketItemsWithId(state, id))

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    if (items.length <= 0) return;
    dispatch(removeFromBasket({ id }))
  }


  return (
    <>
      <TouchableOpacity style={tw.style('bg-white', 'border', 'border-gray-300', 'p-3', isPressed && 'border-b-0')}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-1`}>
            <Text className='text-' style={tw`text-lg mb-1`}> {name} </Text>
            <Text style={tw`text-gray-400`}> {description} </Text>
            <Text style={tw`text-gray-400`}> {valueFormattedWithSymbol} </Text>
          </View>
          <View>
            <Image style={{ borderWidth: 2, borderColor: "red" }} source={{ uri: urlFor(image).url() }} style={tw`h-20 w-20`} />
          </View>
        </View>
      </TouchableOpacity>

      {
        isPressed && (
          <View style={tw`bg-white`}>
            {/* tw`flex-row items-center pb-2 {isPressed && border-b-0}` */}
            <View style={tw.style('flex-row', 'items-center', 'pb-2', isPressed && 'border-b-0')}>
              <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                <MinusCircleIcon stroke={items.length > 0 ? "#0cb" : "gray"} size={40} strokeWidth={2} fill="none" opacity={.5} />
              </TouchableOpacity>
              <Text>{items.length}</Text>
              <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon stroke="#0cb" size={40} strokeWidth={2} fill="none" opacity={.5} />
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </>
  )
}

export default DishRow