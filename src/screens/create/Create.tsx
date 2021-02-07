import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { RootNavigatorParamList } from 'navigations/RootNavigator';

import styles from './styles';

type TCreateScreenNavigation = DrawerNavigationProp<
  RootNavigatorParamList,
  'Create'
>;

type TCreateScreen = {
  navigation: TCreateScreenNavigation;
};

export default ({ navigation }: TCreateScreen) => {
  const handleFormSubmit = useCallback(() => {
    // TODO: use service to send data
    navigation.navigate('Event');
  }, [navigation]);

  return (
    <>
      <Header
        leftComponent={{
          icon: 'menu',
          color: '#fff',
          onPress: () => navigation.openDrawer(),
        }}
        centerComponent={{
          text: 'Create new event',
          style: { color: '#fff', fontSize: 17 },
        }}
      />
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={handleFormSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <View style={styles.container}>
            <Input
              label="Name"
              onChange={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
            />
            <Input
              label="Description"
              onChange={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <Button
              title="Create"
              buttonStyle={styles.submit}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </>
  );
};
