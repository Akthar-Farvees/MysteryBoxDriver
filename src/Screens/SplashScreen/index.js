import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import OrdersScreen from '../OrdersScreen';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Add any necessary logic or async tasks here
    // For example, you can check for authentication, load data, etc.
    // After completing the necessary tasks, navigate to your main screen
    setTimeout(() => {
      navigation.navigate('OrdersScreen');
    }, 2500); // Change the delay duration as per your preference
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../../assets/mystery.png')} style={styles.image} />
        <Text style={{marginTop: 8, fontSize:22, fontWeight: "500"}}>
          I'm a Driver
        </Text>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          Copyright © 2023 - 2025 Mystery Box®. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  image: {
    width: 90,
    height: 90,
  },
  footerContainer: {
    marginTop: 'auto',
    marginBottom: 35,
    marginVertical: 25,
    marginHorizontal: 80,
    alignItems:'center',
  },
  footerText: {
    fontSize: 13,
    color: '#888', // Customize the color as per your design
    textAlign: 'center',
    marginTop: 10, // Adjust the margin top as per your layout
    lineHeight: 20,
  },
});

export default SplashScreen;
