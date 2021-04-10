import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

import styles from './styles';

export default () => {
  const [value, setValue] = useState(require('assets/no-image.png'));

  const onPress = useCallback(() => {
    launchImageLibrary({ mediaType: 'photo' }, (res: ImagePickerResponse) => {
      if (res.uri) {
        setValue({ uri: res.uri });
      }
    });
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Image source={value} style={styles.image} />
    </TouchableOpacity>
  );
};
