import React from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {Home} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </NavigationContainer>
  );
};

export default App;
