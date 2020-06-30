import React from 'react';
import { View } from 'react-native';

const Bai2 = () => {
  return (
    <View 
      style={{
        flex: 1, 
        backgroundColor: 'red',
        alignItems:'center', 
        justifyContent:'center', 
      }}>
      <View 
        style={{
          width: 350, 
          height: 350, 
          backgroundColor: 'yellow',
          flexDirection: 'row-reverse',
        }}>
        <View 
          style={{
            backgroundColor: 'blue',
            width: 250, 
            height: 250,
            alignSelf: 'flex-end',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <View 
            style={{
              backgroundColor: 'pink',
              width: 100, 
              height: 100,
            }}/>
          <View 
            style={{
              backgroundColor: 'orange',
              width: 100, 
              height: 100,
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
            <View
              style={{
                backgroundColor: 'green',
                width: 35, 
                height: 35,
              }}/>
            <View
              style={{
                backgroundColor: 'pink',
                width: 35, 
                height: 35,
              }}/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Bai2;
