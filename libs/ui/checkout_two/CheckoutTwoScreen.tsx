import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/utils';
import React from 'react';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function CheckoutTwoScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: normalize(16),
          marginStart: normalize(16),
          marginEnd: normalize(16),
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <IIcon name="chevron-back" size={normalize(30)} color="#4F4F4F" />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginEnd: normalize(30),
            color: '#000000',
            flex: 1,
            alignSelf: 'center',
            textAlign: 'center',
          }}>
          Checkout
        </Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View>
            <Text
              style={{
                marginTop: normalize(26),
                marginStart: normalize(26),
                color: '#000000',
                fontWeight: 700,
                fontSize: normalize(22),
              }}>
              Payment
            </Text>
            <View
              style={{
                marginTop: normalize(26),
                marginStart: normalize(26),
                marginEnd: normalize(26),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: normalize(18),
                  color: '#000000',
                  fontWeight: 600,
                }}>
                Payment method
              </Text>
            </View>
            <View
              style={{
                borderRadius: normalize(20),
                marginTop: normalize(11),
                marginStart: normalize(26),
                marginEnd: normalize(26),
                padding: normalize(16),
                backgroundColor: 'white',
              }}>
              <View style={{flexDirection: 'row'}}>
                <IIcon
                  name="radio-button-on"
                  size={normalize(20)}
                  color="#EB5757"
                  alignSelf="center"
                />
                <View
                  style={{
                    marginStart: normalize(16),
                    width: normalize(40),
                    height: normalize(40),
                    backgroundColor: '#F47B0A',
                    borderRadius: normalize(10),
                    justifyContent: 'center',
                  }}>
                  <FAIcon
                    name="credit-card"
                    size={normalize(20)}
                    color="#FFFFFF"
                    alignSelf="center"
                  />
                </View>
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                    fontWeight: 600,
                    fontSize: normalize(17),
                    marginStart: normalize(16),
                  }}>
                  Card
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  marginTop: normalize(20),
                  marginBottom: normalize(20),
                  marginStart: normalize(30),
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <IIcon
                  name="radio-button-off"
                  size={normalize(20)}
                  color="#4F4F4F"
                  alignSelf="center"
                />
                <View
                  style={{
                    marginStart: normalize(16),
                    width: normalize(40),
                    height: normalize(40),
                    backgroundColor: '#EB4796',
                    borderRadius: normalize(10),
                    justifyContent: 'center',
                  }}>
                  <FAIcon
                    name="bank"
                    size={normalize(20)}
                    color="#FFFFFF"
                    alignSelf="center"
                  />
                </View>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: '#000000',
                    fontWeight: 600,
                    fontSize: normalize(17),
                    marginStart: normalize(16),
                  }}>
                  Bank account
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{flex: 1}} />
        <View
          style={{
            marginTop: normalize(26),
            marginStart: normalize(26),
            marginEnd: normalize(26),
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 17, color: '#000000'}}>Total</Text>
          <View style={{flex: 1}} />
          <Text style={{fontSize: 22, color: '#000000', fontWeight: 600}}>
            23,000
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CheckoutTwoScreen')}
          style={{
            height: normalize(50),
            width: '85%',
            marginTop: normalize(26),
            marginBottom: normalize(26),
            backgroundColor: '#EB5757',
            alignSelf: 'center',
            borderRadius: normalize(50),
            justifyContent: 'center',
            elevation: 4,
          }}>
          <Text
            adjustsFontSizeToFit
            style={{
              fontSize: normalize(17),
              color: '#FFFFFF',
              alignSelf: 'center',
              fontWeight: 600,
            }}>
            Proceed to payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CheckoutTwoScreen;
