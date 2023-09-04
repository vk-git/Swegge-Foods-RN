import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {normalize} from '../../utils/utils';

function LoginScreen(): JSX.Element {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('email:' + email);
    console.log('password:' + password);
    navigation.navigate('HomeTab', {
      email: email,
      password: password,
    });
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.darker} />
      <View
        style={{
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F2F2F2',
        }}>
        <Image
          style={{
            marginBottom: normalize(50),
          }}
          resizeMode="contain"
          source={require('./logo.png')}
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email address"
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
          <Text style={{color: '#EB5757'}}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('DashboardDrawer')}
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
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '80%',
    height: 50,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#EB5757',
  },
});
