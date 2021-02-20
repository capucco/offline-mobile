import React from 'react';
import { FlatList } from 'react-native';
import { Header } from 'react-native-elements';

import EventListItem from 'components/EventListItem';
import { IEvent, MOCK_EVENTS_DATA } from 'services/events/events';

export default () => {
  const renderEvent = ({ item }: { item: IEvent }) => (
    <EventListItem {...item} />
  );

  return (
    <>
      <Header
        centerComponent={{
          text: 'Events',
          style: { color: '#fff', fontSize: 17 },
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
