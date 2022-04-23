import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile, Home, Feed} from '../pages';

export type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Navigation.Screen name="Home" component={Home} />
      <Navigation.Screen name="Feed" component={Feed} />
      <Navigation.Screen name="Profile" component={Profile} />
    </Navigation.Navigator>
  );
};

export default Routes;
