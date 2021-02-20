import React from 'react';
import { Header } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { DrawerNavigatorParamList } from 'navigations/DrawerNavigator';

type TEventScreenNavigation = DrawerNavigationProp<
  DrawerNavigatorParamList,
  'Event'
>;

type TEventScreen = {
  navigation: TEventScreenNavigation;
  route: any;
};

export default ({ navigation, route }: TEventScreen) => {
  const { title } = route.params;

  return (
    <>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: title,
          style: { color: '#fff', fontSize: 17 },
        }}
        rightComponent={{
          icon: 'share',
          color: '#fff',
        }}
      />
    </>
  );
};
