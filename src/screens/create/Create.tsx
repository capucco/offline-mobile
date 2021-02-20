import React, { useCallback } from 'react';
import { Formik, FormikProps } from 'formik';
import { ScrollView, View } from 'react-native';
import { Header, Input, Button, CheckBox } from 'react-native-elements';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import * as Yup from 'yup';

import { DrawerNavigatorParamList } from 'navigations/DrawerNavigator';
import DateTimePicker from 'components/DatePicker';

import styles from './styles';

type TCreateScreenNavigation = DrawerNavigationProp<
  DrawerNavigatorParamList,
  'Create'
>;

type TCreateScreen = {
  navigation: TCreateScreenNavigation;
};

interface IFormValues {
  name: string;
  description: string;
  private: boolean;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export default ({ navigation }: TCreateScreen) => {
  const handleFormSubmit = useCallback(() => {
    // TODO: use service to send data
    navigation.navigate('Event');
  }, [navigation]);

  return (
    <>
      <Header
        leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: 'Create new event',
          style: { color: '#fff', fontSize: 17 },
        }}
      />
      <Formik
        initialValues={{ name: '', description: '', private: false }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({
          values,
          touched,
          errors,
          isValid,
          handleChange,
          setFieldTouched,
          setFieldValue,
          handleSubmit,
        }: FormikProps<IFormValues>) => (
          <ScrollView style={styles.container}>
            <Input
              label="Name"
              value={values.name}
              onChangeText={(value) => setFieldValue('name', value)}
              onBlur={() => setFieldTouched('name')}
              onChange={handleChange('name')}
              errorMessage={(touched.name && errors?.name) || ''}
            />
            <Input
              label="description"
              value={values.description}
              onChangeText={(value) => setFieldValue('description', value)}
              onBlur={() => setFieldTouched('description')}
              onChange={handleChange('description')}
              errorMessage={(touched.description && errors?.description) || ''}
            />
            <View style={styles.dateTimeContainer}>
              <DateTimePicker
                inputProps={{ label: 'Date', containerStyle: styles.dateInput }}
                pickerProps={{ mode: 'date' }}
              />
              <DateTimePicker
                inputProps={{ label: 'Time', containerStyle: styles.timeInput }}
                pickerProps={{ mode: 'time' }}
              />
            </View>
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
              disabled={!isValid}
              buttonStyle={styles.submit}
              onPress={handleSubmit}
            />
          </ScrollView>
        )}
      </Formik>
    </>
  );
};
