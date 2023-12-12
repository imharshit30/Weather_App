import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HourlyForecast = ({forecast}) => {
  const currentDate = new Date();
  const oneHourAhead = new Date(currentDate.getTime() + 60 * 60 * 1000);

  const formattedTime = `${oneHourAhead
    .getHours()
    .toString()
    .padStart(2, '0')}`;

  const getTimeIndex = () => {
    const index = forecast.hour.findIndex(
      e => e.time.slice(11, 13) === formattedTime,
    );
    return index;
  };
  const renderHourlyItem = ({item}) => (
    <View style={styles.dataContainer}>
      <Text style={styles.timeText}>{item.time.slice(10)}</Text>
      <Ionicons name="planet" size={24} color={'white'} />
      <Text style={styles.timeText}>{item.temp_c}° </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={forecast.hour.slice(getTimeIndex(), getTimeIndex() + 13)}
        renderItem={renderHourlyItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      />
    </View>
  );
};

export default HourlyForecast;

const styles = StyleSheet.create({
  container: {
    height: scale(100),
    marginTop: 50,
    width: '93%',
    alignSelf: 'center',
    borderRadius: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingRight: 10,
  },
  dataContainer: {
    paddingHorizontal: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: '800',
    margin: 5,
    textAlign: 'center',
    color: 'white',
  },
});
