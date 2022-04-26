import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile, Home, Feed} from '../pages';
import {CharacterProps} from '../pages/feed';

export type RootStackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: {
    character: CharacterProps;
  };
};

const Navigation = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Navigation.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerTintColor: '#1E2047',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Navigation.Screen name="Home" component={Home} />
      <Navigation.Screen name="Feed" component={Feed} />
      <Navigation.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: true, title: ''}}
      />
    </Navigation.Navigator>
  );
};

export default Routes;
