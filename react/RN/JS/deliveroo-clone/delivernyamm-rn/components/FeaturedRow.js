import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import sanityClient from '../sanity'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type=='featured' && _id == $id]{ 
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type->{
                        name
                    }
                }
            }[0]`, { id }
        ).then((data) => {
            // console.log('featuredRow > resto', data)
            setRestaurants(data?.restaurants)
        })
    }, [])

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>
            <Text className="text-xs px-4 text-gray-500">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4 "
            >
                {/* rest card */}
                {restaurants?.map((restaurant, key) => (
                    <RestaurantCard
                        key={key}
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
                ))}
                {/* <RestaurantCard
                    id={123}
                    imgUrl="http://links.papareact.com/gn7"
                    title="Yo Sushi!"
                    rating={4.5}
                    genre="japanese"
                    address="123 Maint St"
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="http://links.papareact.com/gn7"
                    title="Yo Sushi!"
                    rating={4.5}
                    genre="japanese"
                    address="123 Maint St"
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="http://links.papareact.com/gn7"
                    title="Yo Sushi!"
                    rating={4.5}
                    genre="japanese"
                    address="123 Maint St"
                    short_description="This is a Test Description"
                    dishes={[]}
                    long={20}
                    lat={0}
                /> */}
            </ScrollView>

        </View>
    )
}

export default FeaturedRow