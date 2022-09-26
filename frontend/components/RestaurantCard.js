import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'


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

    const navigation = useNavigation()
    return (
        <TouchableOpacity style={tw`bg-white mr-3 shadow p-1 max-w-1/2`}
        onPress={() => {
            navigation.navigate("Restaurant", {
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
            })
        }}
        >
            <Image source={{ uri: urlFor(imgUrl).url() }} style={tw`h-36 w-auto rounded-sm`} />

            <View style={tw`px-2 pb-2`}>
                <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
                <View style={tw`flex-row flex-shrink items-center`}>
                    <StarIcon color='green' fill='green' opacity={0.5} size={20} />
                    <Text style={tw`text-xs text-gray-500`}>
                        <Text style={tw`text-green-500`}>{rating}</Text> - {genre}
                    </Text>
                </View>

                <View style={tw`flex-row flex-shrink items-center`}>
                    <MapPinIcon stroke='green' opacity={0.5} size={20}/>
                    <Text style={tw`text-xs text-gray-500`}>Nearby - {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard