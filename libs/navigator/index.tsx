import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {
  DrawerItemList,
  createDrawerNavigator,
  useDrawerProgress,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {StyleSheet, Text, View} from 'react-native';
import SettingScreen from '../ui/SettingsScreen';
import AboutScreen from '../ui/about/AboutScreen';
import CartScreen from '../ui/cart/CartScreen';
import CheckoutOneScreen from '../ui/checkout_one/CheckoutOneScreen';
import CheckoutTwoScreen from '../ui/checkout_two/CheckoutTwoScreen';
import DetailsScreen from '../ui/details/details';
import GetStartedScreen from '../ui/getstarted/GetStartedScreen';
import HomeScreen from '../ui/home/HomeScreen';
import LoginScreen from '../ui/login/LoginScreen';
import MenuScreen from '../ui/menu/MenuScreen';
import ProfileScreen from '../ui/profile/ProfileScreen';
import RestaurantDetails from '../ui/restaurant_details/RestaurantDetails';
import SplashScreen from '../ui/splash/SplashScreem';
import {normalize} from '../utils/utils';
import MapScreen from '../ui/map/MapScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: '#EB5757',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: '#EB5757'},
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 16,
  },
});

function DrawerContent(props): JSX.Element {
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          height: normalize(60),
        }}></View>
      <DrawerItemList {...props} />
      <View style={{flex: 1}} />
      <View
        style={{
          marginStart: normalize(16),
          marginEnd: normalize(16),
          marginBottom: normalize(60),
          flexDirection: 'row',
        }}>
        <Text style={[{color: '#000000', flex: 1}, styles.drawerLblStyle]}>
          Logout
        </Text>
        <Icon name="logout" size={normalize(20)} color="#FFFFFF" />
      </View>
    </View>
  );
}

function DashboardDrawerScreen(): JSX.Element {
  return (
    <Drawer.Navigator
      backBehavior="none"
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'slide',
        drawerPosition: 'right',
        overlayColor: 'transparent',
        headerShown: false,
        drawerStyle: styles.drawerStyles,
        sceneContainerStyle: styles.scene,
        drawerContentContainerStyle: styles.container,
        drawerActiveBackgroundColor: 'white',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: styles.drawerLblStyle,
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Home"
        component={HomeStackDrawer}
        options={{
          drawerLabel: 'Profile',
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutDrawer}
        options={{
          drawerLabel: 'Offers and Promo',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsDrawer}
        options={{
          drawerLabel: 'Privacy policy',
        }}
      />
      {/* <Drawer.Screen
        name="Settings"
        component={SettingsDrawer}
        options={{
          drawerLabel: 'Security',
        }}
      /> */}
    </Drawer.Navigator>
  );
}

function SettingsDrawer(): JSX.Element {
  const drawerProgress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.95], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  const animated1Style = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.stack, animated1Style]}>
      <View
        style={[styles.stack, {backgroundColor: 'rgba(255, 255, 255, 0.7)'}]}>
        <Animated.View style={[styles.stack, animatedStyle]}>
          <Stack.Navigator initialRouteName="SettingScreen">
            <Stack.Screen
              name="SettingScreen"
              component={SettingScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

function AboutDrawer(): JSX.Element {
  const drawerProgress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.95], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  const animated1Style = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.stack, animated1Style]}>
      <View
        style={[styles.stack, {backgroundColor: 'rgba(255, 255, 255, 0.7)'}]}>
        <Animated.View style={[styles.stack, animatedStyle]}>
          <Stack.Navigator initialRouteName="AboutScreen">
            <Stack.Screen
              name="AboutScreen"
              component={AboutScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

function HomeStackDrawer(): JSX.Element {
  const drawerProgress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.95], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  const animated1Style = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.stack, animated1Style]}>
      <View
        style={[styles.stack, {backgroundColor: 'rgba(255, 255, 255, 0.7)'}]}>
        <Animated.View style={[styles.stack, animatedStyle]}>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={DetailsScreen}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="MenuScreen"
              component={MenuScreen}
              options={{headerShown: false, animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{headerShown: false, animation: 'slide_from_bottom'}}
            />
            <Stack.Screen
              name="CheckoutOneScreen"
              component={CheckoutOneScreen}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="CheckoutTwoScreen"
              component={CheckoutTwoScreen}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="RestaurantDetails"
              component={RestaurantDetails}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
          </Stack.Navigator>
        </Animated.View>
      </View>
    </Animated.View>
  );
}

export default function AppNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStartedScreen"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DashboardDrawer"
          component={DashboardDrawerScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
