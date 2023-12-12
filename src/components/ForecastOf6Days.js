import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ForecastOf6Days = ({forecast}) => {
  return (
    <View>
      <Text style={styles.headingText}>Showing details of 6 days</Text>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.dateText}>
            {forecast.forecastday[0].hour[0].time.slice(5, 10)}
          </Text>
          <Ionicons name="cloud" size={24} color={'white'} />
          <Text style={styles.dateText}>
            {forecast.forecastday[0].day.maxtemp_c.toFixed(0)}&deg; /{' '}
            {forecast.forecastday[0].day.mintemp_c.toFixed(0)}&deg;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.dateText}>
            {forecast.forecastday[1].hour[0].time.slice(5, 10)}
          </Text>
          <Ionicons name="cloud" size={24} color={'white'} />
          <Text style={styles.dateText}>
            {forecast.forecastday[1].day.maxtemp_c.toFixed(0)}&deg; /{' '}
            {forecast.forecastday[1].day.mintemp_c.toFixed(0)}&deg;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.dateText}>
            {forecast.forecastday[2].hour[0].time.slice(5, 10)}{' '}
          </Text>
          <Ionicons name="cloud" size={24} color={'white'} />
          <Text style={styles.dateText}>
            {forecast.forecastday[2].day.maxtemp_c.toFixed(0)}&deg; /{' '}
            {forecast.forecastday[2].day.mintemp_c.toFixed(0)}&deg;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.dateText}>
            {forecast.forecastday[3].hour[0].time.slice(5, 10)}{' '}
          </Text>
          <Ionicons name="cloud" size={24} color={'white'} />
          <Text style={styles.dateText}>
            {forecast.forecastday[3].day.maxtemp_c.toFixed(0)}&deg; /{' '}
            {forecast.forecastday[3].day.mintemp_c.toFixed(0)}&deg;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.dateText}>
            {forecast.forecastday[4].hour[0].time.slice(5, 10)}{' '}
          </Text>
          <Ionicons name="cloud" size={24} color={'white'} />
          <Text style={styles.dateText}>
            {forecast.forecastday[4].day.maxtemp_c.toFixed(0)}&deg; /{' '}
            {forecast.forecastday[4].day.mintemp_c.toFixed(0)}&deg;
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.dateText}>
            {forecast.forecastday[5].hour[0].time.slice(5, 10)}{' '}
          </Text>
          <Ionicons name="cloud" size={24} color={'white'} />
          <Text style={styles.dateText}>
            {forecast.forecastday[5].day.maxtemp_c.toFixed(0)}&deg; /{' '}
            {forecast.forecastday[5].day.mintemp_c.toFixed(0)}&deg;
          </Text>
        </View>
      </View>
      <View style={styles.sunsetOuterContainer}>
        <View style={styles.sunsetInnerContainer}>
          <Image source={require('../image/sunset.png')} style={styles.image} />
          <Text style={styles.sunriseText}>Sunset</Text>
          <Text style={styles.timeText}>
            {forecast.forecastday[0].astro.sunset}
          </Text>
        </View>
        <View style={styles.sunriseInnerContainer}>
          <Image
            source={require('../image/sunrise).png')}
            style={styles.image}
          />
          <Text style={styles.sunriseText}>Sunrise</Text>
          <Text style={styles.timeText}>
            {forecast.forecastday[0].astro.sunrise}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForecastOf6Days;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
  },
  dateText: {
    color: 'white',
    fontWeight: '600',
    fontSize: scale(14),
  },
  headingText: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: scale(16),
    color: 'white',
  },
  innerContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sunsetOuterContainer: {
    height: verticalScale(120),
    marginTop: 20,
    width: '100%',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  sunsetInnerContainer: {
    height: verticalScale(120),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sunriseInnerContainer: {
    height: verticalScale(120),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    height: scale(50),
    width: scale(50),
  },
  sunriseText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: scale(12),
  },
  timeText: {
    color: 'white',
    marginTop: scale(20),
    fontWeight: 'bold',
    fontSize: scale(16),
  },
});
