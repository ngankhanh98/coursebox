import React from 'react';
import { ImageBackground, StyleSheet, StatusBar, Dimensions, Image } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');

import materialTheme from '../constants/Theme';
import Images from '../constants/Images';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex center>
          <ImageBackground
            source={{ uri: Images.Onboarding }}
            style={{ height: height, width: width, marginTop: '-55%', zIndex: 1 }}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block center>
              <Block>
                <Text color="white" size={60}>Coursebox</Text>
              </Block>
              <Text size={16} color='rgba(255,255,255,0.6)'>
                Find your new favorite courses on Coursebox
              </Text>
            </Block>
            <Block center>
              <Block row>
                <Button
                  round
                  onlyIcon
                  shadowless
                  icon="facebook"
                  iconFamily="font-awesome"
                  iconColor={theme.COLORS.WHITE}
                  iconSize={theme.SIZES.BASE * 1.625}
                  color={theme.COLORS.FACEBOOK}
                  style={[styles.social, styles.shadow]}
                />
                <Button
                  round
                  onlyIcon
                  shadowless
                  icon="google"
                  iconFamily="font-awesome"
                  iconColor={theme.COLORS.WHITE}
                  iconSize={theme.SIZES.BASE * 1.625}
                  color={theme.COLORS.GOOGLE}
                  style={[styles.social, styles.shadow]}
                />
              </Block>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate('App')}> 
                LOGIN
              </Button>
            </Block>
          </Block>
        </Block>
      </Block>
      /*TODO: this is a main for everything*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
