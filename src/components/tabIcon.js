import React from 'react';
import { Icon } from 'native-base';
import { Text, View } from 'react-native';

const TabIcon = (props) => {
  if (props.type === 'main') {
    return <Icon
      name={props.icon}
      style={{ color: props.focused ? '#2399E6' : '#fff' }}
    >
    </Icon>
  }
  else {
    return <View style={{
      width: '100%', height: '100%', borderBottomWidth: props.focused ? 5 : 0,
      borderColor: props.focused ? '#000080' : '#000'
    }}>
      <Text style={{fontSize:14, fontWeight:'bold', textAlign: 'center', color: props.focused ? '#000080' : '#000' }}> {props.title} </Text>
    </View>
  }
};

export default TabIcon;