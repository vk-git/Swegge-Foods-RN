import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
} from 'react-native-maps';
import IIcon from 'react-native-vector-icons/dist/Ionicons';
import {normalize} from '../../utils/utils';
import elipse from './ellipse.png';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type ItemData = {id: number; coordinates: LatLng[]; holes: []};

function MapScreen(): JSX.Element {
  const navigation = useNavigation();
  const [polygon, setPolygon] = useState<ItemData>();
  const [polygonsId, setPolygonsId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  const onPress = (e: any) => {
    if (!isFinish) {
      let id = polygonsId;
      id++;
      setPolygonsId(id);
      if (!polygon) {
        setIsEditing(true);
        setPolygon({
          id: id,
          coordinates: [e.nativeEvent.coordinate],
          holes: [],
        });
      } else if (polygon) {
        setPolygon({
          ...polygon,
          coordinates: [...polygon.coordinates, e.nativeEvent.coordinate],
        });
      }
    }
  };

  const onFinish = () => {
    if (isEditing && polygon) {
      setIsEditing(false);
      setIsFinish(true);
    }
  };

  const onUndo = () => {
    if (isEditing && polygon && polygon.coordinates.length > 1) {
      let newCoordinates = polygon.coordinates.slice(0, -1);
      if (newCoordinates) {
        setPolygon({
          ...polygon,
          coordinates: [...newCoordinates],
        });
      }
    } else {
      setPolygon(undefined);
      setIsEditing(false);
    }
  };

  const onClear = () => {
    setPolygon(undefined);
    setIsEditing(true);
    setIsFinish(false);
  };

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
            marginTop: normalize(10),
            marginBottom: normalize(10),
            marginStart: normalize(16),
            justifyContent: 'center',
          }}>
          <View style={{alignSelf: 'center'}}>
            <IIcon name="chevron-back" size={normalize(30)} color="#4F4F4F" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            onPress={onPress}>
            {polygon &&
              polygon.coordinates.map((marker: LatLng) => (
                <Marker
                  draggable={true}
                  image={elipse}
                  key={marker.latitude + marker.longitude}
                  coordinate={marker}
                />
              ))}
            {isFinish && polygon && (
              <Polygon
                key={polygon.id}
                coordinates={polygon.coordinates}
                holes={polygon.holes}
                strokeColor="#000"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={1}
              />
            )}
            {isEditing && polygon && (
              <Polyline
                key="editingPolyline"
                coordinates={polygon.coordinates}
                strokeColor="#F00"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={5}
                lineCap="round"
                lineDashPattern={[1, 20]}
              />
            )}
          </MapView>
          <View style={styles.buttonContainer}>
            {isEditing && (
              <TouchableOpacity
                onPress={onFinish}
                style={[styles.bubble, styles.button]}>
                <Text>Finish</Text>
              </TouchableOpacity>
            )}
            {isEditing && (
              <TouchableOpacity
                onPress={onUndo}
                style={[styles.bubble, styles.button]}>
                <Text>Undo</Text>
              </TouchableOpacity>
            )}
            {isFinish && (
              <TouchableOpacity
                onPress={onClear}
                style={[styles.bubble, styles.button]}>
                <Text>Clear & ReDraw</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,255)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default MapScreen;
