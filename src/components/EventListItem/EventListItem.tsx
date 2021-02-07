import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image, ListItem } from 'react-native-elements';

type TEventListItem = {
  image: string;
  title: string;
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
});

export default ({ image, title }: TEventListItem) => {
  const navigation = useNavigation();
  const [imageSrc, setImageSrc] = useState({ uri: image });

  const handleItemPress = useCallback(() => {
    navigation.navigate('Event');
  }, [navigation]);

  const handleImageError = useCallback(() => {
    setImageSrc(require('assets/no-image.png'));
  }, []);

  return (
    <ListItem onPress={handleItemPress}>
      <Image
        source={imageSrc}
        style={styles.image}
        onError={handleImageError}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text>{title}</Text>
    </ListItem>
  );
};
