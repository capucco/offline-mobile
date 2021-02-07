import React, { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'navigations/RootNavigator';

type EventsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Events'
>;

type TEventsScreenProps = {
  navigation: EventsScreenNavigationProp;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({ navigation }: TEventsScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="Create" onPress={() => navigation.navigate('Create')} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text>Events list</Text>
    </View>
  );
};
