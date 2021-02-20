import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Header, Icon, Text } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import dayjs from 'dayjs';

import Image from 'components/Image';
import { DrawerNavigatorParamList } from 'navigations/DrawerNavigator';

import styles from './styles';

type TEventScreenNavigation = DrawerNavigationProp<
  DrawerNavigatorParamList,
  'Event'
>;

type TEventScreen = {
  navigation: TEventScreenNavigation;
  route: any;
};

export default ({ navigation, route }: TEventScreen) => {
  const { title, image, place, date, description } = route.params;

  const handleGo = useCallback(() => {
    // go
  }, []);

  const handleNotInterested = useCallback(() => {
    // go
  }, []);

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
      <ScrollView>
        <Image src={image} style={styles.image} />
        <View style={styles.wrapper}>
          <View style={styles.place}>
            <Icon name="place" color="#989eb1" />
            <Text style={styles.placeText}>{place.name}</Text>
          </View>
          {date ? (
            <Text style={styles.date}>{dayjs(date).fromNow(true)}</Text>
          ) : null}
          <View style={styles.actions}>
            <View style={styles.button}>
              <Button
                title="Go"
                buttonStyle={styles.buttonGo}
                onPress={handleGo}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Not interested"
                buttonStyle={styles.buttonNotInterested}
                onPress={handleNotInterested}
              />
            </View>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </>
  );
};
