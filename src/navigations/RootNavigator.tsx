import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateScreen from 'screens/create';
import EventScreen from 'screens/event';
import EventsScreen from 'screens/events';

export type RootStackParamList = {
  Create: undefined;
  Event: undefined;
  Events: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Events">
    <Stack.Screen name="Create" component={CreateScreen} />
    <Stack.Screen name="Event" component={EventScreen} />
    <Stack.Screen name="Events" component={EventsScreen} />
  </Stack.Navigator>
);

export default RootNavigator;
