import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <Button
          onPress={() => navigation.navigate('Create')}
          icon={<Icon name="arrow-right" size={15} color="white" />}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text>Events list</Text>
    </View>
  );
};
