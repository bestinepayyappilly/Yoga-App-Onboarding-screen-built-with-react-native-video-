import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Login = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        shadowOpacity: 0.8,
        backgroundColor: '#c88d94',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 50,
          color: '#fff',
          marginBottom: 30,
          marginTop: 200,
          fontWeight: '700',
        }}>
        Let's Login
      </Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 10,
          padding: 10,
          fontSize: 20,

          marginBottom: 20,
        }}
        placeholder={'Email'}
        placeholderTextColor="#fff"
      />
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#fff',
          borderRadius: 10,
          padding: 10,
          fontSize: 20,

          marginTop: 20,
        }}
        placeholder={'Password'}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
