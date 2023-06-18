import { useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json'

const order = orders[0]

const OrderDelivery = () => {
    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['12%', '95%'], []);

    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} handleIndicatorStyle={{ backgroundColor: 'grey', width: 100, }}>
                <View style={{ marginTop: 10, marginBottom: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, letterSpacing: 1 }}>14 min</Text>
                    <FontAwesome5
                        name='shopping-bag'
                        size={28}
                        color='#FFE030'
                        style={{ marginHorizontal: 10 }}
                    />
                    <Text style={{ fontSize: 23, letterSpacing: 1 }}>5Km</Text>
                </View>

                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 24, marginVertical: 20, fontWeight: "500", letterSpacing: 1 }}>{order.Restaurant.name}</Text>

                    <View style={{flexDirection: 'row', marginBottom: 20, alignItems: 'center'}}>
                    <Fontisto name='shopping-store' size={20} color="grey" style={{alignSelf: 'center'}}/>
                    <Text style={{ fontSize: 20, color: 'grey', fontWeight: "500", letterSpacing: 1, marginLeft: 15, textAlign: 'center'}}>{order.Restaurant.address}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 20, alignItems: 'center'}}>
                    <FontAwesome5
                        name='map-marker-alt'
                        size={24}
                        color='grey'
                        style={{alignSelf: 'center'}}/>
                    <Text style={{ fontSize: 20, color: 'grey', fontWeight: "500", letterSpacing: 1, marginLeft: 15, textAlign: 'center'}}>{order.User.address}</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', paddingTop: 20 }}>
                        <Text style={{fontSize: 17, color: "grey", fontWeight: "500", letterSpacing: 0.5, marginBottom: 5,}}>Onion Rings x3</Text>
                        <Text style={{fontSize: 17, color: "grey", fontWeight: "500", letterSpacing: 0.5, marginBottom: 5,}}>Big Mac x4</Text>
                        <Text style={{fontSize: 17, color: "grey", fontWeight: "500", letterSpacing: 0.5, marginBottom: 5,}}>Tasty Cup x1</Text>
                        <Text style={{fontSize: 17, color: "grey", fontWeight: "500", letterSpacing: 0.5, marginBottom: 5,}}>Onion Rings x3</Text>
                    </View>
                </View>

                <View style={{backgroundColor: '#FFE030', marginTop: "auto", marginVertical: 30, marginHorizontal: 10, borderRadius: 10,}}>
                    <Text style={{color: 'black', paddingVertical: 13, letterSpacing: 0.5, fontSize: 22, fontWeight: "500", textAlign: "center", justifyContent: "center"}}>Accept Order</Text>
                </View>

            </BottomSheet>
        </View>
    )
}

export default OrderDelivery;

