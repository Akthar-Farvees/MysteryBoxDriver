import { useMemo, useRef, useEffect, useState } from 'react';
import { View, Text, useWindowDimensions, ActivityIndicator } from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json'
import styles from './styles';
import MapView, { Marker } from 'react-native-maps';
import * as Locattion from 'expo-location';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import MapViewDirections from 'react-native-maps-directions';


const order = orders[0]

const OrderDelivery = () => {

    const [driverLocation, setDriverLocation] = useState();
    const [totalMinutes, setTotalMinutes] = useState(0);
    const [totalKm, setTotalKm] = useState(0);

    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['12%', '95%'], []);

    const { height, width } = useWindowDimensions();

    useEffect(() => {
        (async () => {
            let { status } = await Locattion.requestForegroundPermissionsAsync();
            if (!status === 'granted') {
                console.log('Nonono');
                return;
            }

            let location = await Locattion.getCurrentPositionAsync();
            setDriverLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })();

    }, []);

    // console.warn(driverLocation);

    if (!driverLocation) {
        return <ActivityIndicator size={"large"} />
    }


    return (
        <View style={styles.container}>
            <MapView style={{ height, width }}
                showsUserLocation
                followsUserLocation
                initialRegion={{
                    latitude: driverLocation.latitude,
                    longitude: driverLocation.longitude,
                    latitudeDelta: 0.7,
                    longitudeDelta: 0.7,
                }}>

                <MapViewDirections
                    origin={driverLocation}
                    destination={{ latitude: order.User.lat, longitude: order.User.lng }}
                    strokeWidth={12}
                    strokeColor="#f3cb00"
                    waypoints={[{ latitude: order.Restaurant.lat, longitude: order.Restaurant.lng }]}
                    apikey={"AIzaSyAZ5ZypfUXy_LSA4Ul4DTfg9t9hGWzaMts"}
                    onReady={(result) => {
                        setTotalMinutes(result.duration);
                        setTotalKm(result.distance);
                    }}
                />

                <Marker
                    coordinate={{ latitude: order.Restaurant.lat, longitude: order.Restaurant.lng, }}
                    title={order.Restaurant.name}
                    description={order.Restaurant.address}>
                    <View style={{ backgroundColor: '#f3cb00', padding: 6, borderRadius: 20 }}>
                        <Entypo name='shop' size={24} color="black" />
                    </View>
                </Marker>

                <Marker
                    coordinate={{ latitude: order.User.lat, longitude: order.User.lng, }}
                    title={order.User.name}
                    description={order.User.address}
                >
                    <View style={{ backgroundColor: '#f3cb00', padding: 6, borderRadius: 20 }}>

                        <MaterialIcons name="restaurant" size={24} color="black" />
                    </View>
                </Marker>
            </MapView>
            <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} handleIndicatorStyle={styles.handleIndicatorStyle}>
                <View style={styles.handleIndicatorContainer}>
                    <Text style={styles.routeDetailsText}>{totalMinutes.toFixed(0)} min</Text>
                    <FontAwesome5
                        name='shopping-bag'
                        size={28}
                        color='#FFE030'
                        style={{ marginHorizontal: 10 }}
                    />
                    <Text style={styles.routeDetailsText}>{totalKm.toFixed(2)} km</Text>
                </View>

                <View style={styles.deliveryDetailsContainer}>
                    <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>

                    <View style={styles.addressContainer}>
                        <Fontisto name='shopping-store' size={20} color="grey" style={{ alignSelf: 'center' }} />
                        <Text style={styles.addressText}>{order.Restaurant.address}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <FontAwesome5
                            name='map-marker-alt'
                            size={24}
                            color='grey'
                            style={{ alignSelf: 'center' }} />
                        <Text style={styles.addressText}>{order.User.address}</Text>
                    </View>
                    <View style={styles.orderDetailsContainer}>
                        <Text style={styles.orderItemText}>Onion Rings x3</Text>
                        <Text style={styles.orderItemText}>Big Mac x4</Text>
                        <Text style={styles.orderItemText}>Tasty Cup x1</Text>
                        <Text style={styles.orderItemText}>Onion Rings x3</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Accept Order</Text>
                </View>

            </BottomSheet>
        </View>
    )
}

export default OrderDelivery;

