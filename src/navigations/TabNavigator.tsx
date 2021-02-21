import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import CreateScreen from 'screens/create';
import EventsScreen from 'screens/events';

export type TabNavigatorParamList = {
  Create: undefined;
  Event: undefined;
  Events: undefined;
};

const Tab = createBottomTabNavigator();

const CreateTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Create"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';

        if (route.name === 'Create') {
          iconName = focused ? 'add' : 'add';
        } else if (route.name === 'Events') {
          iconName = focused ? 'place' : 'place';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Create" component={CreateScreen} />
    <Tab.Screen name="Events" component={EventsScreen} />
  </Tab.Navigator>
);

const EventsTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Events"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';

        if (route.name === 'Create') {
          iconName = focused ? 'add' : 'add';
        } else if (route.name === 'Events') {
          iconName = focused ? 'place' : 'place';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3381ff',
      inactiveTintColor: '#35424a',
    }}>
    <Tab.Screen name="Create" component={CreateScreen} />
    <Tab.Screen name="Events" component={EventsScreen} />
  </Tab.Navigator>
);

export { CreateTabNavigator, EventsTabNavigator };
