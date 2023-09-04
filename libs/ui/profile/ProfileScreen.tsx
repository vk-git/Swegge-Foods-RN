import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

function ProfileScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F8'}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginTop: normalize(16),
            marginStart: normalize(16),
            justifyContent: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <IIcon name="chevron-back" size={normalize(30)} color="#4F4F4F" />
          </View>
        </TouchableOpacity>
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
            My profile
          </Text>
          <View
            style={{
              marginTop: normalize(26),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 18, color: '#000000', fontWeight: 600}}>
              Personal details
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
              flexDirection: 'row',
            }}>
            <Image
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
              }}
              source={require('./user.png')}
            />
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
                Marvis Ighedosa
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: normalize(15),
                  color: '#000000',
                }}>
                Dosamarvis@gmail.com
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
                +234 9011039271
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
                No 15 uti street off ovie palace road effurun delta state
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: normalize(20),
              marginTop: normalize(27),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              padding: normalize(16),
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: '#000000',
                fontWeight: 700,
              }}>
              Orders
            </Text>
            <IIcon
              name="chevron-forward"
              size={normalize(24)}
              color="#4F4F4F"
            />
          </View>
          <View
            style={{
              borderRadius: normalize(20),
              marginTop: normalize(27),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              padding: normalize(16),
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: '#000000',
                fontWeight: 700,
              }}>
              Pending reviews
            </Text>
            <IIcon
              name="chevron-forward"
              size={normalize(24)}
              color="#4F4F4F"
            />
          </View>
          <View
            style={{
              borderRadius: normalize(20),
              marginTop: normalize(27),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              padding: normalize(16),
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: '#000000',
                fontWeight: 700,
              }}>
              Faq
            </Text>
            <IIcon
              name="chevron-forward"
              size={normalize(24)}
              color="#4F4F4F"
            />
          </View>
          <View
            style={{
              borderRadius: normalize(20),
              marginTop: normalize(27),
              marginBottom: normalize(27),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              padding: normalize(16),
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: '#000000',
                fontWeight: 700,
              }}>
              Help
            </Text>
            <IIcon
              name="chevron-forward"
              size={normalize(24)}
              color="#4F4F4F"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MapScreen');
            }}
            style={{
              borderRadius: normalize(20),
              marginBottom: normalize(27),
              marginStart: normalize(26),
              marginEnd: normalize(26),
              padding: normalize(16),
              backgroundColor: 'white',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 18,
                color: '#000000',
                fontWeight: 700,
              }}>
              Map
            </Text>
            <IIcon
              name="chevron-forward"
              size={normalize(24)}
              color="#4F4F4F"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: normalize(50),
              width: '85%',
              marginTop: normalize(27),
              marginBottom: normalize(27),
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
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfileScreen;
