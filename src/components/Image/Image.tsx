import React, { useCallback, useState } from 'react';
import { ActivityIndicator, ImageStyle, StyleProp } from 'react-native';
import { Image } from 'react-native-elements';

type TImage = {
  src: string;
  style: StyleProp<ImageStyle>;
};

export default ({ src, style }: TImage) => {
  const [imageSrc, setImageSrc] = useState({ uri: src });

  const handleImageError = useCallback(() => {
    setImageSrc(require('assets/no-image.png'));
  }, []);

  return (
    <Image
      source={imageSrc}
      style={style}
      onError={handleImageError}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
};
