import React, { useCallback, useMemo, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import dayjs from 'dayjs';

import styles from './styles';

type TDateTimePicker = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  pickerProps: any;
};

export default ({ label, pickerProps, containerStyle }: TDateTimePicker) => {
  const { mode } = pickerProps;
  const [value, setValue] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onChange = useCallback((date: Date) => {
    if (date) {
      setValue(date);
    }

    setShow(false);
  }, []);

  const onInputPress = useCallback(() => {
    setShow(true);
  }, []);

  const inputValue: string = useMemo(
    () => dayjs(value).format(mode === 'date' ? 'DD.MM.YYYY' : 'hh:mm'),
    [mode, value],
  );

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {label ? <Text style={styles.label}>{label}:</Text> : null}
        <TouchableOpacity onPress={onInputPress}>
          <Text style={styles.value}>{inputValue}</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        {...pickerProps}
        isVisible={show}
        display="spinner"
        onConfirm={onChange}
        onCancel={onChange}
      />
    </>
  );
};
