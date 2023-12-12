import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const WeatherFlatlist = ({location, current, forecast}) => {
  return (
    <View>
      <View style={styles.temperatureContainer}>
        <Text style={{fontWeight: '500', fontSize: scale(25), color: 'white'}}>
          {current.condition.text}
        </Text>
        <Text style={styles.temperatureText}>{current.temp_c}&deg;C</Text>
        <Text style={{fontWeight: '900', fontSize: scale(13), color: 'white'}}>
          H : {forecast.day.maxtemp_c.toFixed(0)}&deg; C || L :{' '}
          {forecast.day.mintemp_c.toFixed(0)}&deg; C
        </Text>
      </View>
    </View>
  );
};

export default WeatherFlatlist;

const styles = StyleSheet.create({
  nameCountryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    margin: 20,
  },
  nameCountryText: {
    fontSize: scale(20),
    fontWeight: '800',
    color: '#fff',
  },
  temperatureContainer: {
    height: verticalScale(290),
    width: moderateScale(320),
    borderRadius: moderateScale(170),
    alignSelf: 'center',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  temperatureText: {
    fontWeight: '900',
    fontSize: scale(60),
    color: '#fff',
  },
});
