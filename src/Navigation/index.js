import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersScreen from '../Screens/OrdersScreen';
import OrderDelivery from '../Screens/OrderDelivery';
import SplashScreen from '../Screens/SplashScreen'
import { StyleSheet, Text, View } from 'react-native';



import React from 'react';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="OrdersScreen" component={OrdersScreen}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery}/>
    </Stack.Navigator>

  )
}

export default Navigation;

const styles = StyleSheet.create({});
