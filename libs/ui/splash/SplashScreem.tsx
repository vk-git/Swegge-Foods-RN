import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageBackground, StatusBar, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

function SplashScreen(): JSX.Element {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GetStartedScreen');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#F68989'} />
      <ImageBackground
        source={require('./getting_started_page.png')}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
    </View>
  );
}

export default SplashScreen;
