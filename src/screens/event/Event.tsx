import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  return (
    <View style={styles.root}>
      <Text>Event</Text>
    </View>
  );
};
