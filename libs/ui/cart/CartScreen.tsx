import React from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/utils';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import MIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Swipeable, TouchableHighlight} from 'react-native-gesture-handler';

type ItemData = {id: string; title: string; price: string; image: string};
type ItemProps = {data: ItemData; onPress: () => void};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Veggie tomato mix',
    price: '10',
    image: require('./menu_1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fishwith mix orange....',
    price: '12',
    image: require('./menu_2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Veggie tomato mix Veggie tomato mix Veggie tomato mix orange....',
    price: '16',
    image: require('./menu_3.png'),
  },
];

const renderRightActions = (progress, dragX, onClick) => {
  return (
    <View
      style={{
        borderRadius: 45,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#DF2C2C',
        marginEnd: '15%',
        width: 45,
        height: 45,
        alignSelf: 'center',
      }}>
      <TouchableHighlight
        style={{
          width: 45,
          height: 45,
          justifyContent: 'center',
          borderRadius: 45,
        }}
        onPress={onClick}>
        <MIcon
          name="delete"
          size={normalize(20)}
          color="#FFFFFF"
          alignSelf="center"
        />
      </TouchableHighlight>
    </View>
  );
};

const CartItem = ({data, onPress}: ItemProps) => (
  <Swipeable
    renderRightActions={(progress, dragX) =>
      renderRightActions(progress, dragX, onPress)
    }
    onSwipeableOpen={() => console.log('swipe open')}
    onSwipeableClose={() => console.log('swipe close')}>
    <View
      style={{
        shadowColor: '#3939391A',
        shadowRadius: 10,
        marginTop: normalize(14),
        borderRadius: normalize(20),
        padding: normalize(14),
        backgroundColor: 'white',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '85%',
      }}>
      <Image
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          borderRadius: 70,
          backgroundColor: 'red',
          width: 70,
          height: 70,
        }}
        source={data.image}
      />
      <View
        style={{
          flex: 1,
          marginStart: normalize(16),
          marginEnd: normalize(16),
          flexDirection: 'column',
        }}>
        <Text
          style={{
            marginTop: normalize(8),
            marginBottom: normalize(8),
            color: '#000000',
            fontWeight: 700,
            fontSize: normalize(17),
          }}>
          {data.title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              flex: 1,
              marginBottom: normalize(10),
              color: '#FA4A0C',
              fontWeight: 700,
              fontSize: normalize(17),
            }}>
            $ {data.price}
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <View style={{elevation: 6}}>
                <Icon name="minussquare" size={normalize(20)} color="#EB5757" />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#4F4F4F',
                marginStart: normalize(10),
                marginEnd: normalize(10),
                fontSize: normalize(15),
              }}>
              2
            </Text>
            <TouchableOpacity>
              <View style={{elevation: 6}}>
                <Icon name="plussquare" size={normalize(20)} color="#EB5757" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </Swipeable>
);

function CartScreen(): JSX.Element {
  const navigation = useNavigation();

  return (
    <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#F2F2F2'}}>
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
          Cart
        </Text>
      </View>
      <View
        style={{
          marginTop: normalize(20),
          marginBottom: normalize(20),
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}>
        <MIcon name="gesture-swipe-left" size={normalize(20)} color="#000000" />
        <Text
          style={{
            marginStart: normalize(10),
            alignSelf: 'center',
            color: '#000000',
          }}>
          swipe left on an item to delete
        </Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <CartItem
            data={item}
            onPress={() => {
              console.log('onItemClick');
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('CheckoutOneScreen')}
        style={{
          height: normalize(50),
          width: '85%',
          marginTop: normalize(10),
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
          Complete order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartScreen;
