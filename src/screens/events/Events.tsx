import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { RootNavigatorParamList } from 'navigations/RootNavigator';
import EventListItem from 'components/EventListItem';
import { MOCK_EVENTS_DATA } from 'services/events/events';

type TEventsScreenNavigation = DrawerNavigationProp<
  RootNavigatorParamList,
  'Events'
>;

type TEventsScreen = {
  navigation: TEventsScreenNavigation;
};

export default ({ navigation }: TEventsScreen) => {
  return (
    <>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{
          text: 'Events',
          style: { color: '#fff', fontSize: 17 },
        }}
        rightComponent={{
          icon: 'add',
          color: '#fff',
          onPress: () => navigation.navigate('Create'),
        }}
      />
      <View>
        {MOCK_EVENTS_DATA.map((event) => (
          <EventListItem key={event.id} {...event} />
        ))}
      </View>
    </>
  );
};
