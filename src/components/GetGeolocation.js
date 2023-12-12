import {
  View,
  Text,
  PermissionsAndroid,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import WeatherFlatlist from './WeatherFlatlist';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Line from './Line';
import BoxContainer from './BoxContainer';
import ForecastOf6Days from './ForecastOf6Days';
import HourlyForecast from './HourlyForecast';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchBar} from 'react-native-screens';
import Searchbar from './Searchbar';

const GetGeolocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [weatherForecastData, setWeatherForecastData] = useState();

  const locationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'App needs access to your location for better functionality.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    locationPermission();
  }, []);

  useEffect(() => {
    if (lat !== null && long !== null) {
      fetchWeatherData();
    }
  }, [lat, long]);

  const fetchWeatherData = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=86cc9d0c342e4d468c3170948231012 &q=${lat},${long}&days=6`,
    )
      .then(res => res.json())
      .then(res => {
        setWeatherData([res]);
        setWeatherForecastData(res.forecast.forecastday);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  const renderWeather = ({item}) => {
    return (
      <View>
        <View>
          <View style={styles.logoAlign}>
            <Ionicons name="location" size={24} color={'green'} />
          </View>
          <Text style={styles.nameContryText}>
            {item.location.name},{' '}
            <Text style={{color: 'green', fontSize: 20}}>
              {item.location.country}
            </Text>
          </Text>
        </View>
        <WeatherFlatlist
          location={item.location}
          current={item.current}
          forecast={item.forecast.forecastday[0]}
        />
        <HourlyForecast forecast={item.forecast.forecastday[0]} />
        <BoxContainer
          location={item.location}
          current={item.current}
          forecast={item.forecast.forecastday[0]}
        />
        <Line item={item.forecast.forecastday[0]} />
        <ForecastOf6Days forecast={item.forecast} />
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <SafeAreaView>
          <View style={styles.SearchBar}>
            <Searchbar />
          </View>
          <FlatList
            data={weatherData}
            renderItem={renderWeather}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

export default GetGeolocation;

const styles = StyleSheet.create({
  nameCountryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    margin: 20,
  },
  nameCountryText: {
    fontSize: 40,
    fontWeight: '800',
  },
  temperatureContainer: {
    height: verticalScale(290),
    width: moderateScale(320),
    borderWidth: 1,
    borderRadius: moderateScale(170),
    alignSelf: 'center',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  temperatureText: {
    fontWeight: '900',
    fontSize: scale(100),
  },
  activityIndicator: {
    height: '25%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
  },
  logoAlign: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  nameContryText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
  SearchBar: {
    paddingBottom: 10,
  },
});
