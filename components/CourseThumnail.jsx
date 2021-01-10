import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = ({ title, teacher }) => (
  <View style={styles.topContainer}>
    <Text category='h5'>{title}</Text>
    <Text category='s1'>By {teacher}</Text>
  </View>
);

const Footer = () => (
  <View style={styles.footerContainer}>
    <Button
      style={styles.footerControl}
      size='small'>
      VIEW DETAIL
    </Button>
  </View>
);

const CourseThumnail = ({ title, teacher, description, image }) => (
  <TouchableOpacity onPress={() => console.log('Pressed')} style={{
    width: 250,
    height: 150,
  }} >
    <ImageBackground source={{uri: image}} style={styles.image} imageStyle={{ borderRadius: 5 }}>
    </ImageBackground>
    <Text style={{ marginLeft: 3 }}>{title}</Text>
  </TouchableOpacity>


);


const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    marginLeft: 20
  },
  image: {
    flex: 1,
    marginBottom: 20,
    marginRight: 15,

  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 8
  },
  footerControl: {
    // marginHorizontal: 2,
  },
});

CourseThumnail.propTypes = {
  title: PropTypes.string,
  teacher: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default CourseThumnail