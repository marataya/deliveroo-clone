import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import tw from 'twrnc'
import client, { urlFor } from '../sanity'

const Categories = () => {

  const [categories, setCategories] = useState([])
    useEffect(() => {
        client
            .fetch(
            `
            *[_type == "category"]
            `
          )
          .then((data) => {
            setCategories(data);
          });
    }, []);

    return (
        <ScrollView style={tw`pl-2 pt-5 max-h-25`} horizontal showsHorizontalScrollIndicator={false}>
        {/* Categorie Card */}
          {categories.map(category => (
            <CategoryCard key={category._id} imgUrl={urlFor(category.image).url()} title={category.name}/>
          ))}
            
        </ScrollView>
    )
}

export default Categories