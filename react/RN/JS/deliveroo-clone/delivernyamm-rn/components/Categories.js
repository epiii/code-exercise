import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const categories = () => {
    // const imgUrl = 'https://pbs.twimg.com/media/FZAFgIQVsAEIgoz?format=jpg&name=large'
    const [categories, setCategories] = useState([])
    const imgUrl = 'http://links.papareact.com/gn7'

    useEffect(() => {
        sanityClient.fetch(`
           *[_type=="category" && _id!="dc3a5ba6-a545-4223-bb45-4aabcb3a0757"]
        `).then((data) => {
            setCategories(data)
            console.log('categories > data', data)
        })
    }, [])

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {/* card  */}
            {categories.map((category, key) => (
                <CategoryCard
                    key={key}
                    title={category.name}
                    imgUrl={category.image && urlFor(category.image).width(200).url()}
                />
            ))}
            {/* <CategoryCard title="testing 1" imgUrl={imgUrl} />
            <CategoryCard title="testing 1" imgUrl={imgUrl} />
            <CategoryCard title="testing 2" imgUrl={imgUrl} />
            <CategoryCard title="testing 3" imgUrl={imgUrl} />
            <CategoryCard title="testing 4" imgUrl={imgUrl} /> */}
        </ScrollView>
    )
}

export default categories