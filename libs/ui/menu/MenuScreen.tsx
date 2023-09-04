import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {normalize} from '../../utils/utils';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
import {useNavigation} from '@react-navigation/native';

type ItemData = {id: string; title: string; image: string};
type ItemProps = {data: ItemData; onPress: () => void; selectedItem: String};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fast Food',
    image: require('./menu_1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Italian',
    image: require('./menu_2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Japanese',
    image: require('./menu_3.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Sea Food',
    image: require('./menu_4.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
    title: 'Fast Food',
    image: require('./menu_1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
    title: 'Italian',
    image: require('./menu_2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Japanese',
    image: require('./menu_3.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Sea Food',
    image: require('./menu_4.png'),
  },
];

const MenuItem = ({data, onPress, selectedItem}: ItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{backgroundColor: 'transparent', margin: normalize(16)}}>
      <View
        style={{
          height: Dimensions.get('window').width / 2,
          width: Dimensions.get('window').width / 2.5,
          shadowColor: '#3939391A',
          elevation: 5,
          shadowRadius: 20,
          marginTop: 50,
          borderRadius: normalize(30),
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            marginTop: normalize(8),
            marginBottom: normalize(8),
            color: '#000000',
            fontWeight: 700,
            fontSize: normalize(22),
          }}>
          {data.title}
        </Text>
        <Text
          style={{
            marginBottom: normalize(10),
            color: '#FA4A0C',
            fontWeight: 700,
            fontSize: normalize(22),
          }}>
          $ 10.5
        </Text>
      </View>
      <Image
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          borderRadius: Dimensions.get('window').width / 3,
          backgroundColor: 'red',
          position: 'absolute',
          width: Dimensions.get('window').width / 3,
          height: Dimensions.get('window').width / 3,
        }}
        source={data.image}
      />
    </View>
  </TouchableOpacity>
);

function MenuScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      <View
        style={{
          flex: 1,
          marginTop: normalize(10),
          elevation: 10,
          backgroundColor: '#F2F2F2',
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        }}>
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
          <View
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              elevation: 3,
              borderRadius: 25,
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
              placeholder="Search"
              placeholderTextColor="#003f5c"
              onChangeText={password => console.log(password)}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            flexDirection: 'column',
            marginTop: normalize(16),
            marginStart: normalize(8),
          }}>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <MenuItem
                data={item}
                onPress={() => {
                  console.log('onItemClick');
                }}
                selectedItem={''}
              />
            )}
            keyExtractor={item => item.id}
            key={2}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
}

export default MenuScreen;
