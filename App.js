import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';


export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout style={styles.container}>
          {/* <Login /> */}
          <Register />
        </Layout>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  }
})