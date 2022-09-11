import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightCircleIcon, ArrowRightIcon } from 'react-native-heroicons/outline'
import tw from 'twrnc'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    return (
        <View>
            <View style={tw`mt-2 flex-row item-center justify-between px-4`}>
                <Text style={tw`font-bold text-lg`}>{title}</Text>
                <ArrowRightIcon className='' stroke="#00ccbb" strokeWidth={2} />
            </View>
            <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                style={tw`pt-4`}
            >
                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/1b/48/dd/fe/come-by-otoro-sushi-in.jpg'
                    title='Yo Sushi!'
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st."
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/1b/48/dd/fe/come-by-otoro-sushi-in.jpg'
                    title='Yo Sushi!'
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st."
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/1b/48/dd/fe/come-by-otoro-sushi-in.jpg'
                    title='Yo Sushi!'
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st."
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl='https://media-cdn.tripadvisor.com/media/photo-s/1b/48/dd/fe/come-by-otoro-sushi-in.jpg'
                    title='Yo Sushi!'
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main st."
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>

        </View>
    )
}

export default FeaturedRow