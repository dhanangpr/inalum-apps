/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import {
  SafeAreaView, Image, StyleSheet,
} from 'react-native';

import { LogoInalum } from '../../assets/logo';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image source={LogoInalum} style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 130,
  },
});
export default Splash;
