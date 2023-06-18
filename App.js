import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import orders from './assets/data/orders.json';
import OrdersScreen from './src/Screens/OrdersScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OrderDelivery from './src/Screens/OrderDelivery';

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>


      {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <OrdersScreen />
      </GestureHandlerRootView> */}

      <GestureHandlerRootView style={{ flex: 1 }}>
        <OrderDelivery/>
      </GestureHandlerRootView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
