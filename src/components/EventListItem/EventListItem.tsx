import React, { useCallback } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
import { Icon, ListItem, Text } from 'react-native-elements';

import Image from 'components/Image';
import { IPlace } from 'services/events/events';

import styles from './styles';

dayjs.extend(relativeTime);

type TEventListItem = {
  image: string;
  title: string;
  place: IPlace;
  date: string;
};

export default (data: TEventListItem) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { image, title, place, date } = data;

  const handleItemPress = useCallback(() => {
    navigation.push('Event', data);
  }, [data, navigation]);

  return (
    <ListItem onPress={handleItemPress} containerStyle={styles.container}>
      <Image src={image} style={styles.image} />
      <ListItem.Content style={styles.info}>
        <ListItem.Title style={styles.title}>{title}</ListItem.Title>
        <View style={styles.place}>
          <Icon name="place" color="#989eb1" />
          <Text style={styles.placeText}>{place.name}</Text>
        </View>
        {date ? (
          <Text style={styles.date}>{dayjs(date).fromNow(true)}</Text>
        ) : null}
      </ListItem.Content>
    </ListItem>
  );
};
