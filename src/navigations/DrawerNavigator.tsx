import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CreateStackNavigator, EventsStackNavigator } from './StackNavigator';

export type DrawerNavigatorParamList = {
  Create: undefined;
  Event: undefined;
  Events: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Create" component={CreateStackNavigator} />
    <Drawer.Screen name="Events" component={EventsStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
