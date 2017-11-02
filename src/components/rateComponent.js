import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StarRating from 'react-native-star-rating';

const RateComponent = (props) => {
  return <View style={styles.container}>
    <Text style={{ fontSize: 18 }}>{props.data.name}</Text>
    <StarRating
      disabled
      maxStars={5}
      rating={props.data.rate}
      starSize={20}
      starColor="#FFDD44"
    />
  </View>
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding:10
  }
})

export default RateComponent;