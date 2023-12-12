import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Homepage');
    }, 1000);
  });

  return (
    <ImageBackground
      source={require('../src/image/splash.jpg')}
      style={styles.container}></ImageBackground>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontWeight: '800',
    fontSize: 30,
    color: 'white',
  },
});
