import React, {useEffect} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {normalize} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});

function GetStartedScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./getting_started_page.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('./delivery_man.png')}
          resizeMode="contain"
          style={{alignSelf: 'center', flex: 1}}
        />
        <View
          style={{
            backgroundColor: '#FFFFFF',
            marginEnd: normalize(30),
            marginStart: normalize(30),
            marginBottom: normalize(20),
            borderRadius: normalize(20),
            justifyContent: 'center',
            elevation: 6,
          }}>
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: normalize(31),
              color: '#4F4F4F',
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 600,
              marginTop: normalize(22),
            }}>
            Quick Delivery at{'\n'}your
            <Text
              style={{
                color: '#FE5150',
                fontSize: normalize(31),
                fontWeight: 600,
              }}>
              {' '}
              Doorstep
            </Text>
          </Text>
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: normalize(13),
              color: '#BDBDBD',
              alignSelf: 'center',
              textAlign: 'center',
              fontWeight: 700,
              marginStart: normalize(16),
              marginEnd: normalize(16),
              marginTop: normalize(16),
            }}>
            Home delivery and onlione reservation{'\n'}system for retaurants and
            cafe
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              height: normalize(50),
              width: normalize(180),
              marginTop: normalize(16),
              marginBottom: normalize(22),
              backgroundColor: '#EB5757',
              alignSelf: 'center',
              borderRadius: normalize(50),
              justifyContent: 'center',
              elevation: 6,
            }}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontSize: normalize(24),
                color: '#FFFFFF',
                alignSelf: 'center',
                fontWeight: 600,
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default GetStartedScreen;
