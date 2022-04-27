import React from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {FavoriteProvider} from './context/useFavorite';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <FavoriteProvider>
        <Routes />
      </FavoriteProvider>
    </NavigationContainer>
  );
};

export default App;
