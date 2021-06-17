import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const OnBoarding = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <Video
        source={require('../../assets/production_ID_3959048.mp4')}
        style={[
          StyleSheet.absoluteFill,
          {
            width: '100%',
            height: '100%',
            opacity: 0.8,
            backgroundColor: 'black',
          },
        ]}
        repeat={true}
        resizeMode="cover"
      />
      <View style={{alignItems: 'center', flex: 1, marginTop: 80}}>
        <Text
          style={{
            fontSize: 80,
            color: '#fff',
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',

            opacity: 0.5,
            fontFamily: 'OpenSans-Bold',
          }}>
          Yoga
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            textAlign: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            width: 350,
            fontWeight: '700',
            opacity: 0.8,

            fontFamily: 'OpenSans-Bold',
          }}>
          The perfect companion for you to start doing yoga during this time.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#fff',
              textAlign: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',

              opacity: 0.8,
              fontFamily: 'OpenSans-Bold',
            }}>
            Lets Get Started
          </Text>
          <Image
            style={{height: 25, width: 25, margin: 5}}
            source={require('../../assets/arrow-right.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
