import React from 'react';
import { StyleSheet, View } from 'react-native';
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

const CourseThumnail = ({ title, teacher, description }) => (
  <Card style={styles.card} header={(props) => <Header {...props} title={title} teacher={teacher} />} footer={Footer}>
    <Text>
      {description}
    </Text>
  </Card>
);


const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 8,
    marginLeft: 20
  },
  card: {
    flex: 1,
    marginBottom: 20
    // padding: 5,
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
  description: PropTypes.string
}

export default CourseThumnail