import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import dayjs from 'dayjs';

import Image from 'components/Image';
import { IPlace } from 'services/events/events';

import styles from './styles';

type TEventLayout = {
  description: string;
  place: IPlace;
  image: string;
  date: string;
};

export default ({ image, place, date, description }: TEventLayout) => {
  const handleGo = useCallback(() => {
    // go
  }, []);

  const handleNotInterested = useCallback(() => {
    // go
  }, []);

  return (
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
  );
};
