import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from "react-native-heroicons/outline";
import tw from "twrnc";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {

  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
  client
    .fetch(
      `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{name}
        }
      }[0]`,
      { id }
    )
    .then((data) => {
      setRestaurants(data?.restaurants);
    });
  }, [id]);


  return (
    <View style={tw`mt-7 max-h-1/2`}>
      <View style={tw`flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>{title}</Text>
        <ArrowRightIcon className="" stroke="#00ccbb" strokeWidth={2} />
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
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        )
        )        
        }

      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
