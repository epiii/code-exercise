import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectLocation } from '../redux/navSlice';

const MapScreen = () => {
    const navigation = useNavigation()
    const location = useSelector(selectLocation)
    // cl('mapscreen > coor', coordinate)

    return (
        <View style={styles.wrapper}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coordinate.latitude,
                    longitude: location.coordinate.longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03
                }}
                // mapType='terrain'
                region={{
                    latitude: location.coordinate.latitude,
                    longitude: location.coordinate.longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03
                }}
            >
                {/* {latitude && ( */}
                <Marker
                    coordinate={{
                        latitude: location.coordinate.latitude,
                        longitude: location.coordinate.longitude,
                    }}
                    title={location.name}
                    description={location.description}
                    identifier="spot location"
                />
                {/* )} */}
            </MapView>

            <TouchableOpacity
                onPress={() => navigation.navigate('SearchScreen')}
                style={styles.searchBox}
            >
                <Text style={styles.searchText}>
                    {location.description ? location.description : 'Search Location ...'}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchBox: {
        marginTop: 30,
        height: 50,
        // width: 50,
        paddingHorizontal: 20,
        position: 'absolute',
        backgroundColor: 'white',
        width: '80%',
        alignContent: 'center',
        justifyContent: 'center',
    },
    searchText: {
        fontSize: 18
    }

})