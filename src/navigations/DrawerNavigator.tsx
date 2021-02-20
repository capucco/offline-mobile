import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import { CreateStackNavigator, EventsStackNavigator } from './StackNavigator';

export type DrawerNavigatorParamList = {
  Create: undefined;
  Events: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const DrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Create" component={CreateStackNavigator} />
    <Drawer.Screen name="Events" component={EventsStackNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
