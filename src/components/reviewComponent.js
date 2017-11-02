import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StarRating from 'react-native-star-rating';

const ReviewComponent = (props) => {
  return <View key={props.data.id} style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: 16, fontWeight: '500', paddingRight: 5 }}>
        {props.data.Reviewer_Name}
      </Text>
      <StarRating
        disabled
        maxStars={5}
        rating={parseInt(props.data.rating, 10)}
        starSize={16}
        starColor="#FFDD44"
      />
    </View>
    <Text style={{ fontStyle: 'italic' }}>{props.data.content}</Text>
  </View>
};
const styles = StyleSheet.create({
  container: {width:'100%',
    borderBottomWidth: 1, borderColor: '#EDF4F7',
    alignItems: 'center', justifyContent: 'center', padding: 5
  }
})

export default ReviewComponent;