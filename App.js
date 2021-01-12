import * as eva from '@eva-design/eva';
import { createStackNavigator } from '@react-navigation/stack';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import TopNavigationBar from './components/TopNavigationBar';
import AppNavigator from './screens/Dashboard';
import store from './store';

function App({ toast }) {

  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
          <TopNavigationBar />
        </View>
        <AppNavigator />

      </ApplicationProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App