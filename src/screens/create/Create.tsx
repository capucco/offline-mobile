import React, { useCallback } from 'react';
import { Formik, FormikProps } from 'formik';
import { ScrollView, View } from 'react-native';
import { Header, Input, Button, CheckBox } from 'react-native-elements';
import { StackNavigationProp } from '@react-navigation/stack';
import * as Yup from 'yup';

import { StackNavigatorParamList } from 'navigations/StackNavigator';
import DateTimePicker from 'components/DateTimePicker';

import styles from './styles';

type TCreateScreenNavigation = StackNavigationProp<
  StackNavigatorParamList,
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
  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      // TODO: use service to send data
      // eslint-disable-next-line no-console
      console.log(values);
      navigation.navigate('Event');
      resetForm();
    },
    [navigation],
  );

  return (
    <>
      <Header
        centerComponent={{
          text: 'Create new event',
          style: { color: '#fff', fontSize: 17 },
        }}
      />
      <Formik
        validateOnMount
        initialValues={{ name: '', description: '', private: false }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({
          values,
          touched,
          errors,
          isValid,
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
              errorMessage={(touched.name && errors?.name) || ''}
            />
            <Input
              label="Description"
              value={values.description}
              onChangeText={(value) => setFieldValue('description', value)}
              onBlur={() => setFieldTouched('description')}
              errorMessage={(touched.description && errors?.description) || ''}
            />
            <View style={styles.dateTimeContainer}>
              <DateTimePicker
                label="Date"
                containerStyle={styles.dateContainer}
                pickerProps={{ mode: 'date' }}
              />
              <DateTimePicker
                label="Time"
                containerStyle={styles.timeContainer}
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
            <View style={styles.submitContainer}>
              <Button
                title="Create"
                disabled={!isValid}
                buttonStyle={styles.submit}
                onPress={handleSubmit}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    </>
  );
};
