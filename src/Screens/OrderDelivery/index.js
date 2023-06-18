import { useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json'
import styles from './styles';

const order = orders[0]

const OrderDelivery = () => {
    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['12%', '95%'], []);

    return (
        <View style={styles.container}>
            <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} handleIndicatorStyle={styles.handleIndicatorStyle}>
                <View style={styles.handleIndicatorContainer}>
                    <Text style={styles.routeDetailsText}>14 min</Text>
                    <FontAwesome5
                        name='shopping-bag'
                        size={28}
                        color='#FFE030'
                        style={{ marginHorizontal: 10 }}
                    />
                    <Text style={styles.routeDetailsText}>5Km</Text>
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

