import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CreateScreen from 'screens/create';
import EventScreen from 'screens/event';
import EventsScreen from 'screens/events';

export type RootNavigatorParamList = {
  Create: undefined;
  Event: undefined;
  Events: undefined;
};

const Drawer = createDrawerNavigator<RootNavigatorParamList>();

const RootNavigator = () => (
  <Drawer.Navigator initialRouteName="Events">
    <Drawer.Screen name="Create" component={CreateScreen} />
    <Drawer.Screen name="Event" component={EventScreen} />
    <Drawer.Screen name="Events" component={EventsScreen} />
  </Drawer.Navigator>
);

export default RootNavigator;
