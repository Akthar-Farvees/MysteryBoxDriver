import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigation';      



export default function App() {
  return (
    <NavigationContainer>

        <GestureHandlerRootView style={{ flex: 1 }}>
           <Navigation/>
        </GestureHandlerRootView>

        <StatusBar style="auto" />
     </NavigationContainer>
  );
}

