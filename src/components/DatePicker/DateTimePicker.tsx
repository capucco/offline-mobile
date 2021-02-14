import React, { useCallback, useMemo, useState } from 'react';
import DateTimePicker, {
  AndroidNativeProps,
  IOSNativeProps,
  WindowsNativeProps,
} from '@react-native-community/datetimepicker';
import { Input, InputProps } from 'react-native-elements';

type TDateTimePicker = {
  inputProps?: InputProps;
  pickerProps: (
    | Omit<IOSNativeProps, 'value'>
    | Omit<AndroidNativeProps, 'value'>
    | Omit<WindowsNativeProps, 'value'>
  ) & { mode: string };
};

export default ({ inputProps, pickerProps }: TDateTimePicker) => {
  const { mode } = pickerProps;
  const [value, setValue] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onChange = useCallback((_event: Event, date?: Date) => {
    if (date) {
      setValue(date);
      setShow(false);
    }
  }, []);

  const onTextPress = useCallback(() => {
    setShow(true);
  }, []);

  const minimumDate: Date = useMemo(() => new Date(), []);

  const inputValue: string = useMemo(
    () => (mode === 'date' ? value.toDateString() : value.toTimeString()),
    [mode, value],
  );

  return (
    <>
      <Input {...inputProps} onFocus={onTextPress} value={inputValue} />
      {show && (
        <DateTimePicker
          {...pickerProps}
          minimumDate={minimumDate}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};
