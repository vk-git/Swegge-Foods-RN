import React, {useRef, useState} from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/utils';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import FAIcon from 'react-native-vector-icons/dist/FontAwesome';
import FIcon from 'react-native-vector-icons/dist/Feather';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Parabola from '../../utils/parabola';
import {useDispatch, useSelector} from 'react-redux';
import {CartData, addEditDeleteCart} from '../../store/reducers/cart';

function DetailsScreen(): JSX.Element {
  const dispatch = useDispatch();
  const cartState = useSelector((state: any) => state.cartState.items);

  const navigation = useNavigation();
  const cartRef = useRef(View);

  let contentTop = Platform.OS == 'ios' ? 64 : 56;

  const [startPosition, setStartPosition] = useState({x: 0.0, y: 0.0});
  const [endPosition, setEndPosition] = useState({x: 0.0, y: 0.0});
  const [isTrigger, setTrigger] = useState(false);

  const handleAddToCart = (event: GestureResponderEvent) => {
    setStartPosition({
      x: event.nativeEvent.pageX,
      y: event.nativeEvent.pageY,
    });
    setTrigger(true);
    let cartEntry: CartData[] = [
      ...cartState,
      {
        id: 'item.id',
        itemName: 'item.title',
        itemImage: 'item.title',
        itemQty: 2,
      },
    ];
    dispatch(addEditDeleteCart(cartEntry));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
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
        <View style={{flex: 1}} />

        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={{
            height: normalize(40),
            width: normalize(40),
            marginTop: normalize(16),
            marginEnd: normalize(16),
            //backgroundColor: '#FFFFFF',
            //borderRadius: normalize(10),
            justifyContent: 'center',
            //elevation: 3,
          }}>
          <View
            ref={cartRef}
            onLayout={() => {
              cartRef.current.measureInWindow((x, y, width, height) => {
                console.log('measureInWindow: ' + x, y, width, height);
                setEndPosition({
                  x: x + 10,
                  y: y,
                });
              });
            }}
            style={{alignSelf: 'center'}}>
            <FIcon name="shopping-cart" size={normalize(24)} color="#000000" />
            {cartState && cartState.length != 0 ? (
              <View
                style={[
                  {
                    width: 20,
                    height: 20,
                    backgroundColor: '#EB5757',
                    borderRadius: 10,
                    position: 'absolute',
                    zIndex: -1,
                  },
                  {
                    top: -10,
                    right: -10,
                    zIndex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                  {cartState.length}
                </Text>
              </View>
            ) : null}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: normalize(16),
            marginEnd: normalize(16),
            justifyContent: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <Icon name="hearto" size={normalize(30)} color="#4F4F4F" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View>
            <Text
              style={{
                color: '#000000',
                marginTop: normalize(8),
                fontWeight: 600,
                fontSize: normalize(21),
                alignSelf: 'center',
              }}>
              Melting Cheese
            </Text>
            <Text
              style={{
                color: '#EB5757',
                marginTop: normalize(4),
                fontWeight: 500,
                fontSize: normalize(14),
                alignSelf: 'center',
              }}>
              $
              <Text
                style={{
                  color: '#4F4F4F',
                  marginTop: normalize(4),
                  fontWeight: 500,
                  fontSize: normalize(21),
                  alignSelf: 'center',
                }}>
                {' '}
                9.47
              </Text>
            </Text>
            <View style={{marginTop: normalize(20), elevation: 10}}>
              <Image
                style={{
                  marginTop: normalize(8),
                  height: normalize(200),
                  width: normalize(200),
                  margin: normalize(4),
                  alignSelf: 'center',
                }}
                resizeMode="contain"
                source={require('./pizza_4.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: normalize(20),
              }}>
              <TouchableOpacity
                style={{
                  marginTop: normalize(10),
                  marginBottom: normalize(12),
                }}>
                <View style={{alignSelf: 'center', elevation: 6}}>
                  <Icon
                    name="minussquare"
                    size={normalize(26)}
                    color="#EB5757"
                  />
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  color: '#4F4F4F',
                  alignSelf: 'center',
                  marginStart: normalize(10),
                  marginEnd: normalize(10),
                  fontWeight: 500,
                  fontSize: normalize(21),
                }}>
                2
              </Text>
              <TouchableOpacity
                style={{marginTop: normalize(10), marginBottom: normalize(12)}}>
                <View style={{alignSelf: 'center', elevation: 6}}>
                  <Icon
                    name="plussquare"
                    size={normalize(26)}
                    color="#EB5757"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: '#828282',
                alignSelf: 'center',
                marginStart: normalize(10),
                marginEnd: normalize(10),
                fontWeight: 500,
                fontSize: normalize(14),
              }}>
              $19.34
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: normalize(40),
                marginStart: normalize(16),
                marginEnd: normalize(16),
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <IIcon
                  name="radio-button-off"
                  size={normalize(20)}
                  color="#4F4F4F"
                />
                <Text
                  style={{
                    color: '#BDBDBD',
                    fontWeight: 600,
                    fontSize: normalize(16),
                  }}>
                  $6.44
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 300,
                    fontSize: normalize(16),
                    marginTop: normalize(6),
                  }}>
                  8 inch
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <IIcon
                  name="radio-button-on"
                  size={normalize(20)}
                  color="#EB5757"
                />
                <Text
                  style={{
                    color: '#BDBDBD',
                    fontWeight: 600,
                    fontSize: normalize(16),
                  }}>
                  $9.47
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 300,
                    fontSize: normalize(16),
                    marginTop: normalize(6),
                  }}>
                  12 inch
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <IIcon
                  name="radio-button-off"
                  size={normalize(20)}
                  color="#4F4F4F"
                />
                <Text
                  style={{
                    color: '#BDBDBD',
                    fontWeight: 600,
                    fontSize: normalize(16),
                  }}>
                  $15.32
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: 300,
                    fontSize: normalize(16),
                    marginTop: normalize(6),
                  }}>
                  16 inch
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: normalize(40),
                marginStart: normalize(16),
                marginEnd: normalize(16),
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <FAIcon name="star" size={normalize(20)} color="#4F4F4F" />
                <Text style={{color: '#000000', fontSize: normalize(16)}}>
                  4.9
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                    fontSize: normalize(16),
                  }}>
                  44 Calories
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: normalize(16),
                  }}>
                  20 - 30 min
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={{
              height: normalize(50),
              width: '80%',
              marginTop: normalize(20),
              marginBottom: normalize(22),
              backgroundColor: '#EB5757',
              alignSelf: 'center',
              borderRadius: normalize(10),
              justifyContent: 'center',
              elevation: 6,
            }}>
            <Text
              adjustsFontSizeToFit
              style={{
                fontSize: normalize(24),
                color: '#FFFFFF',
                alignSelf: 'center',
              }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Parabola
        isTrigger={isTrigger}
        rate={0.9}
        duration={500}
        start={startPosition}
        end={endPosition}
        top={contentTop}
      />
    </View>
  );
}

export default DetailsScreen;
