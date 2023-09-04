import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function SettingScreen(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darker} />
      <View
        style={{
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingScreen;
