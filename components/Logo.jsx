import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Background from './Background';

const Logo = () => (
  <Image source={require('../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 100,
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
    // marginBottom: 10,

  },
});

export default Logo;