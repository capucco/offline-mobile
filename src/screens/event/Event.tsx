import React from 'react';
import { Header } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import { Route } from '@react-navigation/native';

import { StackNavigatorParamList } from 'navigations/StackNavigator';
import { IEvent } from 'services/events/events';
import EventLayout from 'layouts/EventLayout';

type TEventScreenNavigation = StackNavigationProp<
  StackNavigatorParamList,
  'Event'
>;

type TEventScreen = {
  navigation: TEventScreenNavigation;
  route: Route<'Event'> & {
    params?: IEvent;
  };
};

export default ({ navigation, route }: TEventScreen) => {
  return (
    <>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: route.params?.title || 'Event',
          style: { color: '#fff', fontSize: 17 },
        }}
        rightComponent={{
          icon: 'share',
          color: '#fff',
        }}
      />
      {route.params ? <EventLayout {...route.params} /> : null}
    </>
  );
};
