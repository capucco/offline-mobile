import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CreateScreen from 'screens/create';
import EventScreen from 'screens/event';
import EventsScreen from 'screens/events';

export type StackNavigatorParamList = {
  Create: undefined;
  Event: undefined;
  Events: undefined;
};

const Stack = createStackNavigator<StackNavigatorParamList>();

// TODO: refactor stack navigator later
const EventsStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Events"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Create" component={CreateScreen} />
    <Stack.Screen name="Event" component={EventScreen} />
    <Stack.Screen name="Events" component={EventsScreen} />
  </Stack.Navigator>
);

const CreateStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Create"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Create" component={CreateScreen} />
    <Stack.Screen name="Event" component={EventScreen} />
    <Stack.Screen name="Events" component={EventsScreen} />
  </Stack.Navigator>
);

export { CreateStackNavigator, EventsStackNavigator };
