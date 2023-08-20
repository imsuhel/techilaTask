import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Routes from './Routes';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </SafeAreaView>
  );
};

export default App;
