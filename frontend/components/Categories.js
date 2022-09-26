import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import tw from 'twrnc'

const Categories = () => {
    return (
        <ScrollView style={tw`pt-5 max-h-25`} horizontal showsHorizontalScrollIndicator={false}>
        {/* Categorie Card */}

            <CategoryCard imgUrl='https://demuths.co.uk/img/u/images/_256x256_crop_center-center_70_none/BAA1C21B-9743-4DCB-96B3-76D08CBFB5F5.jpeg' title="Delicious shushi"/>
            <CategoryCard imgUrl='https://i.pinimg.com/736x/9d/6c/5e/9d6c5e8645a36749d659dce7c7ece08b--king-sushi-sushi-roll-recipes.jpg' title="Shushi"/>
            <CategoryCard imgUrl='https://i.pinimg.com/736x/9d/6c/5e/9d6c5e8645a36749d659dce7c7ece08b--king-sushi-sushi-roll-recipes.jpg' title="asdf"/>
            <CategoryCard imgUrl='https://i.pinimg.com/736x/9d/6c/5e/9d6c5e8645a36749d659dce7c7ece08b--king-sushi-sushi-roll-recipes.jpg' title="Shushi 2"/>
            <CategoryCard imgUrl='https://i.pinimg.com/736x/9d/6c/5e/9d6c5e8645a36749d659dce7c7ece08b--king-sushi-sushi-roll-recipes.jpg' title="Shushi 3"/>
            <CategoryCard imgUrl='https://i.pinimg.com/736x/9d/6c/5e/9d6c5e8645a36749d659dce7c7ece08b--king-sushi-sushi-roll-recipes.jpg' title="Shushi 4"/>
            <CategoryCard imgUrl='https://i.pinimg.com/736x/9d/6c/5e/9d6c5e8645a36749d659dce7c7ece08b--king-sushi-sushi-roll-recipes.jpg' title="Shushi 5"/>
        </ScrollView>
    )
}

export default Categories