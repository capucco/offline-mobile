import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import { Avatar, Button, Icon, ListItem, Text } from 'react-native-elements';
import dayjs from 'dayjs';

import Image from 'components/Image';
import { IPlace, TPerson } from 'services/events/events';

import styles from './styles';

type TEventLayout = {
  description: string;
  place: IPlace;
  image: string;
  date: string;
  organizer: TPerson;
  invited?: TPerson[];
};

export default ({
  image,
  place,
  date,
  description,
  organizer,
  invited,
}: TEventLayout) => {
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
        <Text style={styles.caption}>Organizer:</Text>
        <ListItem containerStyle={styles.person}>
          <Avatar source={{ uri: organizer.photo }} size="large" rounded />
          <ListItem.Content>
            <ListItem.Title style={styles.personName}>
              {organizer.name}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.personDescription}>
              {organizer.description}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        {invited ? (
          <>
            <Text style={styles.caption}>Attendees:</Text>
            {invited.map((person: TPerson) => (
              <ListItem key={person.id} containerStyle={styles.person}>
                <Avatar source={{ uri: person.photo }} size="large" rounded />
                <ListItem.Content>
                  <ListItem.Title style={styles.personName}>
                    {person.name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.personDescription}>
                    {person.description}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </>
        ) : null}
      </View>
    </ScrollView>
  );
};
