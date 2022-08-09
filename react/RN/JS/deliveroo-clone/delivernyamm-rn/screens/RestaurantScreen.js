import {
    useNavigation,
    useRoute
} from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import {
    Image,
    ScrollView,
    Text,
    View
} from 'react-native'
import { urlFor } from '../sanity'

const RestaurantScreen = () => {
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }
    } = useRoute()

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgUrl.url())
                    }}
                    className="w-full h-56"
                />
                <Text>{title}</Text>
            </View>
        </ScrollView>
    )
}
export default RestaurantScreen