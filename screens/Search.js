import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WeatherFlatlist from '../src/components/WeatherFlatlist';
import HourlyForecast from '../src/components/HourlyForecast';
import BoxContainer from '../src/components/BoxContainer';
import Line from '../src/components/Line';
import ForecastOf6Days from '../src/components/ForecastOf6Days';
import Searchbar from '../src/components/Searchbar';

const Search = ({route, navigation}) => {
  const city = route.params.name;
  const [cityData, setCityData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchWeatherData = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=86cc9d0c342e4d468c3170948231012 &q=${city}&days=6`,
    )
      .then(res => res.json())
      .then(res => {
        setCityData([res]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setError(error);
      });
  };
  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  function renderCityData({item}) {
    if (!item || !item.location) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>City data not found.</Text>
        </View>
      );
    } else {
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
    }
  }

  return (
    <ImageBackground
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      source={require('../src/image/bg2.jpg')}
      resizeMode="stretch"
      blurRadius={70}>
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <View style={styles.SearchBar}>
            <Searchbar />
          </View>
          <FlatList
            data={cityData}
            renderItem={renderCityData}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default Search;

const styles = StyleSheet.create({
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
  activityIndicator: {
    height: '25%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
