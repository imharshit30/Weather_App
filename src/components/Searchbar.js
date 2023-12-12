import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const Searchbar = () => {
  const [cityName, setCityName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.searchBarHeader}>
      <TextInput
        style={styles.SearchBar}
        placeholder="Enter city name..."
        placeholderTextColor={'white'}
        value={cityName}
        onChangeText={txt => {
          setCityName(txt);
        }}
        onFocus={() => setIsFocused(true)} // Set isFocused to true on focus/z
        onBlur={() => setIsFocused(false)} // Set isFocused to false on blur
      />
      <Pressable
        onPress={() => {
          navigation.navigate('Search', {name: cityName});
          setCityName('');
        }}
        style={styles.searchLogoContainer}>
        <Ionicons name="search" size={24} color={'gray'} />
      </Pressable>
    </View>
  );
};

export default Searchbar;
const styles = StyleSheet.create({
  SearchBar: {
    height: verticalScale(50),
    width: '70%',
    fontWeight: '500',
    fontSize: scale(14),
    color: 'white',
    paddingLeft: 30,
  },
  searchBarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: verticalScale(50),
    marginTop: 10,
    borderRadius: 10,
    width: '92%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'space-between',
  },
  searchLogoContainer: {
    width: '17%',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(50),
    borderTopLeftRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
