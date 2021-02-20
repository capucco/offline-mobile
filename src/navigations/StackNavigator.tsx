import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Event from 'screens/event';
import { CreateTabNavigator, EventsTabNavigator } from './TabNavigator';

export type StackNavigatorParamList = {
  Create: undefined;
  Event: undefined;
  Events: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Events"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Create" component={CreateTabNavigator} />
    <Stack.Screen name="Event" component={Event} />
    <Stack.Screen name="Events" component={EventsTabNavigator} />
  </Stack.Navigator>
);

export default StackNavigator;
