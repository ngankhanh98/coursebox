import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React from 'react';
import TextInputFields from './components/TextInputFields';
import { INPUT_TYPE } from './contants';
import Login from './screens/Login/Login';

export default function App() {


  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Layout>
          <Login />
        </Layout>
      </ApplicationProvider>
    </>
  );
}