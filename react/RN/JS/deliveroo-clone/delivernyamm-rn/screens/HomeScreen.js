import { useNavigation } from '@react-navigation/native'
import sanityClient from '../sanity'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from 'react-native'
import {
    AdjustmentsIcon,
    ChevronDownIcon,
    SearchIcon,
    UserIcon
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'

const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type=='featured']{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->
                }
            }
        `).then((data) => {
            setFeaturedCategories(data)
        })
    }, [])
    // console.log('feat cat', featuredCategories)

    return (
        <SafeAreaView className="bg-white pt-10">

            {/* header */}
            <View className=" flex-row pb-3 items-center mx-4 space-x-2 px-4">
                <Image
                    source={{
                        uri: 'https://pbs.twimg.com/media/FZAFgIQVsAEIgoz?format=jpg&name=large'
                        // uri: 'https://links.papareact/com/wru'
                    }}
                    className="h-7 w-7 p-4 bg-gray-300 rounded-full"
                />

                <View className=" flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <SearchIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>

                <AdjustmentsIcon size={20} color="#00CCBB" />
            </View>

            {/* body content */}
            <ScrollView
                className="bg-gray-100 "
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >
                {/* categories */}
                <Categories />

                {/* featured rows */}
                {featuredCategories?.map((category, key) => (
                    <FeaturedRow
                        key={key}
                        title={category.name}
                        description={category.short_description}
                        id={category._id}
                    />
                ))}
                {/* <FeaturedRow
                    title="Featured"
                    description="Paid placements from our partners"
                    id="1"
                />
                <FeaturedRow
                    title="Tasty Discounts"
                    description="Everyone's been enjoying these juicy discounts!"
                    id="2"
                />
                <FeaturedRow
                    title="Offers near you!"
                    description="why not support you local restaurant tonigth!"
                    id="3"
                /> */}
            </ScrollView>

        </SafeAreaView>
    )
}
export default HomeScreen