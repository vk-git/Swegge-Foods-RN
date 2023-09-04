import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  GestureResponderEvent,
  Platform,
  ImageBackground,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import FIcon from 'react-native-vector-icons/dist/Feather';
import {normalize} from '../../utils/utils';
import Parabola from '../../utils/parabola';
import {TouchableHighlight} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import cart, {
  CartData,
  CartState,
  addEditDeleteCart,
} from '../../store/reducers/cart';

type ItemData = {id: string; title: string; image: string};
type RestaurantData = {id: string; title: string; image: string};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fast Food',
    image: require('./hamburger.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Italian',
    image: require('./pizza.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Japanese',
    image: require('./sushi.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Sea Food',
    image: require('./scorpion.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'View All',
    image: require('./scorpion.png'),
  },
];

const RestaurantDataList: RestaurantData[] = [
  {
    id: 'Restaurant-1',
    title: 'Suhani Restaurant',
    image: require('./suhani_restaurant.png'),
  },
  {
    id: 'Restaurant-2',
    title: 'Pista House',
    image: require('./pista_house.png'),
  },
  {
    id: 'Restaurant-3',
    title: 'Pizza Hut',
    image: require('./suhani_restaurant.png'),
  },
  {
    id: 'Restaurant-4',
    title: 'KFC Banani',
    image: require('./pista_house.png'),
  },
  {
    id: 'Restaurant-5',
    title: 'Burger King',
    image: require('./suhani_restaurant.png'),
  },
];

type ItemProps = {
  data: ItemData;
  onPress: () => void;
  onAddItem: (event: GestureResponderEvent) => void;
  selectedItem: string;
};

const style = StyleSheet.create({
  itemSelected: {
    height: normalize(55),
    width: normalize(55),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(6),
    borderColor: '#EB5757',
    borderWidth: normalize(6),
    elevation: 6,
    padding: 2,
    justifyContent: 'center',
  },
  itemNormal: {
    height: normalize(55),
    width: normalize(55),
    backgroundColor: '#FFFFFF',
    borderRadius: normalize(6),
    elevation: 6,
    padding: 6,
    justifyContent: 'center',
  },
});

const Item = ({data, onPress, selectedItem}: ItemProps) => (
  <TouchableHighlight underlayColor={'#DADADA'} onPress={onPress}>
    <View
      style={{
        margin: normalize(10),
        borderRadius: normalize(20),
        alignItems: 'center',
      }}>
      <View
        style={selectedItem == data.id ? style.itemSelected : style.itemNormal}>
        {data.title == 'View All' ? (
          <Icon
            name="filter"
            size={normalize(30)}
            color={selectedItem == data.id ? '#EB5757' : '#000000'}
            alignSelf="center"
          />
        ) : (
          <Image
            resizeMode="contain"
            style={{
              height: normalize(44),
              width: normalize(44),
            }}
            source={data.image}
          />
        )}
      </View>
      <Text
        style={{
          marginTop: normalize(8),
          color: '#000000',
          fontSize: normalize(10),
        }}>
        {data.title == 'View All' ? '' : data.title}
      </Text>
    </View>
  </TouchableHighlight>
);

const PopularItem = ({data, onPress, onAddItem}: ItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: normalize(15),
          margin: normalize(16),
          elevation: 6,
          flexDirection: 'column',
        }}>
        <Text
          style={{
            color: '#000000',
            marginTop: normalize(8),
            fontWeight: 500,
            fontSize: normalize(14),
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
          44 calories
        </Text>
        <Image
          style={{
            marginTop: normalize(8),
            height: normalize(145),
            width: normalize(145),
            margin: normalize(4),
            alignSelf: 'center',
          }}
          resizeMode="contain"
          source={require('./pizza_3.png')}
        />
        <Text
          style={{
            color: '#EB5757',
            marginTop: normalize(4),
            fontWeight: 500,
            fontSize: normalize(13),
            alignSelf: 'center',
          }}>
          $
          <Text
            style={{
              color: '#4F4F4F',
              marginTop: normalize(4),
              fontWeight: 500,
              fontSize: normalize(16),
              alignSelf: 'center',
            }}>
            {' '}
            9.47
          </Text>
        </Text>
        <TouchableOpacity
          onPress={onAddItem}
          style={{marginTop: normalize(10), marginBottom: normalize(12)}}>
          <View style={{alignSelf: 'center', elevation: 6}}>
            <Icon name="plussquare" size={normalize(20)} color="#EB5757" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

type RestaurantItemProps = {
  data: RestaurantData;
  onPress: () => void;
};

const RestaurantItem = ({data, onPress}: RestaurantItemProps) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'#DADADA'}>
      <View
        style={{
          elevation: 10,
          borderRadius: normalize(10),
          margin: normalize(20),
          backgroundColor: '#FFFFFF',
          flexDirection: 'column',
        }}>
        <View
          style={{
            height: normalize(140),
            borderTopStartRadius: normalize(10),
            borderTopEndRadius: normalize(10),
            backgroundColor: '#DADADA',
          }}>
          <ImageBackground
            style={{
              height: normalize(140),
              width: '100%',
            }}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            resizeMode="contain"
            source={data.image}>
            <View style={{height: '100%', flexDirection: 'column'}}>
              <Image
                style={{
                  marginTop: normalize(25),
                  marginStart: normalize(-5),
                  width: normalize(95),
                  height: normalize(31),
                }}
                source={require('./rescued.png')}
              />
              <Image
                style={{
                  marginTop: normalize(5),
                  marginStart: normalize(-5),
                  width: normalize(72),
                  height: normalize(27),
                }}
                source={require('./off_50.png')}
              />
              <View style={{flex: 1}} />
              <View
                style={{
                  marginStart: normalize(14),
                  marginBottom: normalize(14),
                  justifyContent: 'center',
                  alignSelf: 'baseline',
                  padding: normalize(6),
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  borderRadius: normalize(10),
                }}>
                <Image
                  style={{
                    width: normalize(10),
                    height: normalize(10),
                    alignSelf: 'center',
                  }}
                  source={require('./time_circle.png')}
                />
                <Text
                  style={{
                    marginStart: normalize(6),
                    color: '#030303',
                    fontSize: normalize(10),
                    alignSelf: 'center',
                  }}>
                  30 min
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{margin: normalize(16)}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{flexDirection: 'column', flex: 1, alignSelf: 'center'}}>
              <Text
                style={{
                  color: '#333333',
                  fontSize: normalize(17),
                  fontWeight: 700,
                }}>
                {data.title}
              </Text>
              <Text style={{color: '#707070'}}>Chinnese, North Indian</Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                width: normalize(50),
                height: normalize(24),
                marginEnd: normalize(16),
                backgroundColor: '#509807',
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: normalize(20),
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                  alignSelf: 'center',
                  fontSize: normalize(14),
                }}>
                4.5
              </Text>
              <Image
                style={{
                  width: normalize(10),
                  height: normalize(10),
                  alignSelf: 'center',
                }}
                source={require('./star_white.png')}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(16), flexDirection: 'row'}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
                color: '#333333',
                fontSize: normalize(11),
                alignSelf: 'center',
              }}>
              200
            </Text>
            <Text
              style={{
                marginStart: normalize(10),
                color: '#F88922',
                fontSize: normalize(18),
                alignSelf: 'center',
              }}>
              ₹100
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: normalize(14),
                  height: normalize(16),
                  alignSelf: 'center',
                }}
                resizeMode="contain"
                source={require('./fire.png')}
              />
              <Text
                style={{
                  textAlign: 'right',
                  marginEnd: normalize(16),
                  marginStart: normalize(6),
                  alignSelf: 'center',
                }}>
                145 cal
              </Text>
            </View>
          </View>
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
              alignSelf: 'center',
              marginTop: normalize(6),
              marginEnd: normalize(16),
              marginStart: normalize(16),
              color: '#A7A7A7',
              fontSize: normalize(11),
            }}>
            Left over food and supplies are gathered and sold for 50% off!
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const BreakfastItem = ({data}: ItemProps) => {
  return (
    <View
      style={{
        elevation: normalize(2),
        borderRadius: normalize(16),
        width: normalize(170),
        height: normalize(254),
        backgroundColor: '#FFFFFF',
      }}>
      <ImageBackground
        style={{
          width: '100%',
          height: normalize(133),
        }}
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        resizeMode="contain"
        source={require('./cappuccino.png')}>
        {data.id == '3ac68afc-c605-48d3-a4f8-fbd91aa97f63' ? (
          <View style={{height: '100%', flexDirection: 'column'}}>
            <Image
              style={{
                marginTop: normalize(16),
                marginStart: normalize(-5),
                width: normalize(72),
                height: normalize(27),
              }}
              source={require('./off_50.png')}
            />
          </View>
        ) : null}
      </ImageBackground>
      <Text
        style={{
          color: '#333333',
          marginTop: normalize(16),
          marginHorizontal: normalize(12),
          fontSize: normalize(17),
        }}>
        Cappuccino
      </Text>
      <Text
        style={{
          color: '#7C7C7C',
          marginHorizontal: normalize(12),
          fontSize: normalize(14),
        }}>
        Suhani Restaurant
      </Text>
      <View style={{flex: 1}} />
      <View
        style={{
          flexDirection: 'row',
          marginBottom: normalize(16),
          marginHorizontal: normalize(16),
        }}>
        <Text
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
            color: '#333333',
            fontSize: normalize(11),
            alignSelf: 'center',
          }}>
          ₹200
        </Text>
        <Text
          style={{
            marginStart: normalize(10),
            color: '#F88922',
            fontSize: normalize(18),
            alignSelf: 'center',
          }}>
          ₹100
        </Text>
      </View>
    </View>
  );
};

const scrollBarBorderRadius = 4;
const scrollElementWidthPercent = 45;
const scrollElementWidthPercentStr = `${scrollElementWidthPercent}%`;

function HomeScreen({navigation}): JSX.Element {
  const dispatch = useDispatch();

  const cartState = useSelector((state: any) => state.cartState.items);

  let contentTop = Platform.OS == 'ios' ? 64 : 56;

  const [selectedItem, setSelectedItem] = useState('');
  const cartRef = useRef(View);
  const [startPosition, setStartPosition] = useState({x: 0.0, y: 0.0});
  const [endPosition, setEndPosition] = useState({x: 0.0, y: 0.0});
  const [isTrigger, setTrigger] = useState(false);

  const [contentOffset, setContentOffset] = useState({x: 0, y: 0});
  const [contentSize, setContentSize] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  let scrollPosPercent;
  if (contentOffset.x > 0) {
    scrollPosPercent =
      (contentOffset.x / (contentSize - scrollViewWidth)) *
      (100 - scrollElementWidthPercent);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: normalize(26),
            marginStart: normalize(16),
          }}>
          <Text
            style={{
              color: '#EB5757',
              fontSize: normalize(18),
              fontWeight: 400,
            }}>
            Hi Alex
          </Text>
          <Text
            style={{
              color: '#4F4F4F',
              fontSize: normalize(21),
              marginTop: normalize(6),
              fontWeight: 700,
            }}>
            Find your Delicious Food
          </Text>
        </View>
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
          onPress={() => navigation.navigate('ProfileScreen')}
          style={{
            height: normalize(40),
            width: normalize(40),
            justifyContent: 'center',
            marginTop: normalize(16),
            marginEnd: normalize(16),
          }}>
          <View style={{alignSelf: 'center', marginEnd: normalize(10)}}>
            <FIcon name="menu" size={normalize(30)} color="#000000" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{width: '100%'}}>
          <View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                elevation: 5,
                borderRadius: 30,
                height: 50,
                marginTop: normalize(16),
                marginEnd: normalize(16),
                marginStart: normalize(16),
              }}>
              <TextInput
                style={{
                  height: 50,
                  flex: 1,
                  padding: 10,
                  marginLeft: 20,
                  color: '#000000',
                }}
                placeholder="Search food nearby"
                placeholderTextColor="#003f5c"
                onChangeText={password => console.log(password)}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: normalize(26),
              marginStart: normalize(16),
            }}>
            <Text
              style={{
                color: '#4F4F4F',
                fontWeight: 700,
                fontSize: normalize(21),
                marginTop: normalize(6),
              }}>
              Favourite Curations:
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: normalize(16),
              marginStart: normalize(8),
            }}>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={({item}) => (
                <Item
                  data={item}
                  onPress={() => {
                    console.log('onItemClick');
                    if (item.title == 'View All') {
                      navigation.navigate('MenuScreen');
                    } else {
                      setSelectedItem(item.id);
                    }
                  }}
                  onAddItem={() => console.log('item click')}
                  selectedItem={selectedItem}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={{
              borderRadius: normalize(10),
              marginHorizontal: normalize(28),
              marginTop: normalize(16),
              padding: normalize(16),
              backgroundColor: '#FDF9EA',
            }}>
            <Text style={{color: '#F88922', fontSize: normalize(19)}}>
              Looking for{' '}
              <Text
                style={{
                  color: '#F88922',
                  fontSize: normalize(19),
                  fontWeight: 700,
                }}>
                Breakfast?
              </Text>
            </Text>
            <Text style={{color: '#A6978A', fontSize: normalize(14)}}>
              Here’s what you might like to taste
            </Text>
            <FlatList
              scrollEventThrottle={16}
              style={{
                marginHorizontal: normalize(-24),
                marginVertical: 20,
              }}
              ItemSeparatorComponent={() => <View style={{width: 10}} />}
              horizontal={true}
              data={DATA}
              renderItem={({item}) => (
                <BreakfastItem
                  data={item}
                  onPress={() => {}}
                  onAddItem={() => {}}
                  selectedItem=""
                />
              )}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
                setContentOffset(e.nativeEvent.contentOffset);
              }}
              automaticallyAdjustContentInsets={false}
              onLayout={e => {
                setScrollViewWidth(e.nativeEvent.layout.width);
              }}
              onContentSizeChange={(width, _) => {
                setContentSize(width);
              }}
            />
            <Animated.View
              style={{
                start: 16,
                marginBottom: 8,
                width: 100,
                height: 4,
                borderRadius: scrollBarBorderRadius,
                backgroundColor: '#EFEAD6',
                zIndex: 1,
              }}>
              <Animated.View
                style={{
                  start: `${Number(scrollPosPercent || 0).toFixed(0)}%`,
                  width: scrollElementWidthPercentStr,
                  height: 4,
                  borderRadius: scrollBarBorderRadius + 2,
                  backgroundColor: '#F88922',
                }}
              />
            </Animated.View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: normalize(26),
              marginStart: normalize(16),
            }}>
            <Text
              style={{
                color: '#4F4F4F',
                fontWeight: 700,
                fontSize: normalize(21),
                marginTop: normalize(6),
              }}>
              Favourite Dishes:
            </Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={DATA}
              renderItem={({item}) => (
                <PopularItem
                  data={item}
                  onPress={() => {
                    navigation.navigate('DetailsScreen');
                  }}
                  selectedItem={''}
                  onAddItem={event => {
                    setStartPosition({
                      x: event.nativeEvent.pageX - 10,
                      y: event.nativeEvent.pageY - 10,
                    });
                    setTrigger(true);
                    let cartEntry: CartData[] = [
                      ...cartState,
                      {
                        id: item.id,
                        itemName: item.title,
                        itemImage: item.title,
                        itemQty: 1,
                      },
                    ];
                    dispatch(addEditDeleteCart(cartEntry));
                    setTimeout(() => {
                      setTrigger(false);
                    }, 600);
                  }}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: normalize(16),
              marginStart: normalize(16),
            }}>
            <Text
              style={{
                color: '#4F4F4F',
                fontWeight: 700,
                fontSize: normalize(21),
                marginTop: normalize(6),
              }}>
              Popular Restaurant
            </Text>
          </View>
          <View style={{width: '100%', alignSelf: 'center'}}>
            <FlatList
              horizontal={true}
              data={RestaurantDataList}
              renderItem={({item}) => (
                <RestaurantItem
                  data={item}
                  onPress={() => navigation.navigate('RestaurantDetails')}
                />
              )}
              keyExtractor={item => item.id}
            />
            {/* <RestaurantItem /> */}
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('MenuScreen')}
              style={{
                height: normalize(70),
                width: normalize(70),
                marginTop: normalize(16),
                marginEnd: normalize(16),
                marginBottom: normalize(16),
                backgroundColor: '#EB5757',
                borderRadius: normalize(70),
                justifyContent: 'center',
                elevation: 6,
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={{color: '#FFFFFF', fontSize: normalize(19)}}>
                  Menu
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
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

export default HomeScreen;

{
  /* <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darker} />   
       <View style={{alignItems: 'center'}}>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({item}) => (
            <Item
              data={item}
              onPress={() => {
                console.log('onItemClick');
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>Center</Text>
      </View> 
    </SafeAreaView>*/
}
