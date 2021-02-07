import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Header } from 'react-native-elements';

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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default ({ navigation }: TEventsScreen) => {
  return (
    <>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{ text: 'Events', style: { color: '#fff' } }}
        rightComponent={{
          icon: 'add',
          color: '#fff',
          onPress: () => navigation.navigate('Create'),
        }}
      />
      <View style={styles.root}>
        {MOCK_EVENTS_DATA.map((event) => (
          <EventListItem key={event.id} {...event} />
        ))}
      </View>
    </>
  );
};
