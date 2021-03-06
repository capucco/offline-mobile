import React, { useCallback, useState } from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { Image } from 'react-native-elements';

import styles from './styles';

type TImage = {
  src: string;
  style: StyleProp<ViewStyle>;
};

export default ({ src, style }: TImage) => {
  const [imageSrc, setImageSrc] = useState({ uri: src });

  const handleImageError = useCallback(() => {
    setImageSrc(require('assets/no-image.png'));
  }, []);

  return (
    <Image
      source={imageSrc}
      containerStyle={style as any}
      onError={handleImageError}
      PlaceholderContent={<ActivityIndicator style={styles.loader} />}
    />
  );
};
