import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {verticalScale} from 'react-native-size-matters';
import Ioniocons from 'react-native-vector-icons/Ionicons';

const BoxContainer = ({location, current, forecast}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Ioniocons name="sunny" size={24} color={'white'} />
          <Text style={styles.container1Text}>UV</Text>
          <Text style={styles.container1Text}>{current.uv}</Text>
        </View>
        <View style={styles.container1}>
          <Ioniocons name="thermometer-outline" size={24} color={'white'} />
          <Text style={styles.container1Text}>Feels Like</Text>
          <Text style={styles.container1Text}>{current.feelslike_c}&deg;</Text>
        </View>
        <View style={styles.container1}>
          <Ioniocons name="water" size={24} color={'white'} />
          <Text style={styles.container1Text}>Humidity</Text>
          <Text style={styles.container1Text}>{current.humidity} %</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image
            source={require('../image/wind.png')}
            style={{height: 20, width: 20}}
          />
          <Text style={styles.container1Text}>Wind mph</Text>
          <Text style={styles.container1Text}>{current.wind_mph}</Text>
        </View>
        <View style={styles.container1}>
          <Image
            source={require('../image/air.png')}
            style={{height: 30, width: 35}}
          />
          <Text style={styles.container1Text}>Feels Like</Text>
          <Text style={styles.container1Text}>{current.feelslike_c}&deg;</Text>
        </View>
        <View style={styles.container1}>
          <Ioniocons name="eye" size={24} color={'white'} />
          <Text style={styles.container1Text}>Visibility</Text>
          <Text style={styles.container1Text}>{current.vis_miles} mi</Text>
        </View>
      </View>
    </View>
  );
};

export default BoxContainer;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  container1: {
    height: verticalScale(110),
    margin: 3,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000',
    // opacity: 0.3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container1Text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
  },
});
