import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {normalize} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';
import IIcon from 'react-native-vector-icons/dist/Ionicons';

function RestaurantDetails(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <ImageBackground
        style={{
          height: normalize(200),
          width: '100%',
        }}
        source={require('./suhani_restaurant.png')}>
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
              <IIcon name="chevron-back" size={normalize(30)} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <View style={{flex: 1}} />
        </View>
      </ImageBackground>
      <View
        style={{
          marginTop: normalize(-16),
          flex: 1,
          backgroundColor: '#FFFFFF',
          borderTopStartRadius: normalize(20),
          borderTopEndRadius: normalize(20),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginStart: normalize(16),
            marginEnd: normalize(26),
            marginTop: normalize(-20),
          }}>
          <View
            style={{
              alignSelf: 'baseline',
              backgroundColor: '#FFFFFF',
              borderRadius: normalize(40),
              elevation: normalize(10),
              paddingStart: normalize(20),
              paddingEnd: normalize(20),
              paddingTop: normalize(6),
              paddingBottom: normalize(6),
            }}>
            <Text
              style={{
                fontSize: normalize(18),
                color: '#4A4A4A',
                fontWeight: '700',
              }}>
              Suhani Restaurant
            </Text>
            <Text style={{fontSize: normalize(12), color: '#616161'}}>
              Chinnese, North Indian
            </Text>
          </View>
          <View style={{flex: 1}} />
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 10,
              width: 50,
              height: 50,
              borderRadius: 25,
              borderColor: '#FF785B',
              borderWidth: 2,
              justifyContent: 'center',
            }}>
            <IIcon
              name="heart-outline"
              size={normalize(30)}
              color="#FF785B"
              alignSelf="center"
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            marginStart: normalize(16),
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}}>
            <Text
              style={{
                fontSize: normalize(20),
                fontWeight: '700',
                color: '#5E5959',
              }}>
              Description
            </Text>
            <Text
              style={{
                fontSize: normalize(10),
                color: '#5E5959',
                textAlign: 'justify',
              }}>
              Our fried rice is made from the finest ingredients and veggies.
              single dish is made with fresh vegetables, rescued.
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
      </View>
    </View>
  );
}

export default RestaurantDetails;
