import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity style={tw`bg-white mr-3 shadow`}>
            <Image source={{ uri: imgUrl }} style={tw`h-36 w-36`} />

            <View style={tw`px-2 pb-2`}>
                <Text style={tw`font-bold text-large pt-2`}>{title}</Text>
                <View style={tw`flex-row items-center`}>
                    <StarIcon color='green' fill='green' opacity={0.5} size={20} />
                    <Text style={tw`text-xs text-gray-500`}>
                        <Text style={tw`text-green-500`}>{rating}</Text> - {genre}
                    </Text>
                </View>

                <View style={tw`flex-row items-center`}>
                    <MapPinIcon stroke='green' opacity={0.5} size={20}/>
                    <Text className="text-gra" style={tw`text-xs text-gray-500`}>Nearby - {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard