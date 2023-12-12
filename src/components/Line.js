import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {scale, verticalScale} from 'react-native-size-matters';

const Line = ({item}) => {
  const a = new Date().getTime();
  const b = new Date(a).getHours();
  const hours = b.toString().padStart(2, 0);

  function getHours() {
    const index = item.hour.findIndex(i => i.time.slice(11, 13) === hours);
    return index;
  }

  return (
    <View style={styles.chart}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Weather Forecast Of 6 hours</Text>
      </View>
      <LineChart
        data={{
          labels: [
            item.hour[getHours()].time.slice(10),
            item.hour[getHours() + 1].time.slice(10),
            item.hour[getHours() + 2].time.slice(10),
            item.hour[getHours() + 3].time.slice(10),
            item.hour[getHours() + 4].time.slice(10),
            item.hour[getHours() + 5].time.slice(10),
          ],
          datasets: [
            {
              data: [
                item.hour[getHours()].temp_c,
                item.hour[getHours() + 1].temp_c,
                item.hour[getHours() + 2].temp_c,
                item.hour[getHours() + 3].temp_c,
                item.hour[getHours() + 4].temp_c,
                item.hour[getHours() + 5].temp_c,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={180}
        // yAxisLabel="$"
        yAxisSuffix="°C"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#000',
          backgroundGradientTo: 'green',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 10,
          borderRadius: 15,
          elevation: 0.5,
        }}
      />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    paddingTop: 10,
  },
  headingText: {
    fontWeight: '800',
    fontSize: scale(16),
    color: 'white',
  },
  headerContainer: {
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(30),
  },
});
