import React from 'react';
import { FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { RootNavigatorParamList } from 'navigations/RootNavigator';
import EventListItem from 'components/EventListItem';
import { IEvent, MOCK_EVENTS_DATA } from 'services/events/events';

type TEventsScreenNavigation = DrawerNavigationProp<
  RootNavigatorParamList,
  'Events'
>;

type TEventsScreen = {
  navigation: TEventsScreenNavigation;
};

export default ({ navigation }: TEventsScreen) => {
  const renderEvent = ({ item }: { item: IEvent }) => (
    <EventListItem {...item} />
  );

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
      <FlatList
        data={MOCK_EVENTS_DATA}
        renderItem={renderEvent}
        keyExtractor={(event: IEvent) => event.id}
      />
    </>
  );
};
