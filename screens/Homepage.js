import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import GetGeolocation from '../src/components/GetGeolocation';
const Homepage = () => {
  return (
    <ImageBackground
      blurRadius={70}
      source={require('../src/image/bg.png')}
      style={styles.image}>
      <GetGeolocation />
    </ImageBackground>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
