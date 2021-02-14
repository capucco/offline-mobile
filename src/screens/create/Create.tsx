import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { ScrollView } from 'react-native';
import { Header, Input, Button, CheckBox } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { RootNavigatorParamList } from 'navigations/RootNavigator';
import Calendar from 'components/Calendar';

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
        initialValues={{ title: '', description: '', private: false }}
        onSubmit={handleFormSubmit}>
        {({
          values,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
        }) => (
          <ScrollView style={styles.container}>
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
            <Calendar />
            <CheckBox
              title="Private"
              size={30}
              containerStyle={styles.checkbox}
              textStyle={styles.checkboxText}
              checked={values.private}
              onPress={() => setFieldValue('private', !values.private)}
            />
            <Button
              title="Create"
              buttonStyle={styles.submit}
              onPress={handleSubmit}
            />
          </ScrollView>
        )}
      </Formik>
    </>
  );
};
