import React from 'react';
import { View } from 'react-native';

const Bai1 = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}/>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'blue'}}/>
        <View style={{flex: 1, backgroundColor: 'yellow'}}/>
      </View>
    </View>
  );
};

export default Bai1;
