import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreateScreen from 'screens/create';
import EventScreen from 'screens/event';
import EventsScreen from 'screens/events';
import HomeScreen from 'screens/home';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Create"
      component={CreateScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Event"
      component={EventScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Events"
      component={EventsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default RootNavigator;
