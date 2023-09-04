import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import IIcon from 'react-native-vector-icons/dist/Ionicons';

function CheckoutOneScreen(): JSX.Element {
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
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginTop: normalize(26),
              marginStart: normalize(26),
              color: '#000000',
              fontWeight: 700,
              fontSize: normalize(22),
            }}>
            Delivery
          </Text>
          <View
            style={{
              marginTop: normalize(26),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18, color: '#000000', fontWeight: 600}}>
              Address details
            </Text>
            <View style={{flex: 1}} />
            <Text style={{fontSize: 15, color: '#FA4A0C', fontWeight: 600}}>
              change
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
            <View
              style={{
                flex: 1,
                marginStart: normalize(10),
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 700,
                  fontSize: normalize(18),
                }}>
                Marvis Kparobo
              </Text>

              <View
                style={{
                  flex: 1,
                  marginTop: normalize(6),
                  marginBottom: normalize(6),
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: normalize(15),
                  color: '#000000',
                }}>
                Km 5 refinery road oppsite republic road, effurun, delta state
              </Text>
              <View
                style={{
                  flex: 1,
                  marginTop: normalize(6),
                  marginBottom: normalize(6),
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
              />
              <Text
                style={{
                  textAlign: 'justify',
                  fontWeight: 400,
                  fontSize: normalize(15),
                  color: '#000000',
                }}>
                +234 9011039271
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: normalize(26),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18, color: '#000000', fontWeight: 600}}>
              Delivery method.
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
              flexDirection: 'column',
            }}>
            <View style={{flexDirection: 'row'}}>
              <IIcon
                name="radio-button-on"
                size={normalize(20)}
                color="#EB5757"
              />
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 600,
                  fontSize: normalize(17),
                  marginStart: normalize(10),
                }}>
                Door delivery
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
              />
              <Text
                style={{
                  color: '#000000',
                  fontWeight: 600,
                  fontSize: normalize(17),
                  marginStart: normalize(10),
                }}>
                Pick up
              </Text>
            </View>
          </View>
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
      </ScrollView>
    </View>
  );
}

export default CheckoutOneScreen;
