import { Box, Flex } from '@react-native-material/core'
import React from 'react'
import { Text } from 'react-native'

const CobaScreen = () => {
    return (
        <Flex>
            <Box h={50} style={{ backgroundColor: 'lightgreen' }}>
                <Text>Box 1</Text>
            </Box>
            <Box h={12} style={{ backgroundColor: 'lightblue' }}>
                <Text>Box 2</Text>
            </Box>
            <Flex fill style={{ backgroundColor: 'tomato' }}>
                <Text>Box 3</Text>
            </Flex>
        </Flex>
    )
}

export default CobaScreen

// const styles = StyleSheet.create({})