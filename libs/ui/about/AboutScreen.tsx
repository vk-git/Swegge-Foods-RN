import React from 'react';
import {View, Text} from 'react-native';

function AboutScreen(): JSX.Element {
  return (
    <View
      style={{
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>About</Text>
    </View>
  );
}

export default AboutScreen;
