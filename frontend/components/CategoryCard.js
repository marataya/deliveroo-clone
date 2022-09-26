import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const CategoryCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity style={tw`mr-2`}>
            <Image source={{
                uri: imgUrl
            }}
            style={tw`h-20 w-20 rounded`}

            />
            <Text style={tw`top-1 left-1 absolute text-white font-bold`}>{title}</Text>

        </TouchableOpacity>
    )
}

export default CategoryCard