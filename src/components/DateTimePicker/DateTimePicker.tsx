import React, { useCallback, useMemo, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Input, InputProps } from 'react-native-elements';

type TDateTimePicker = {
  inputProps?: InputProps;
  pickerProps: any;
};

export default ({ inputProps, pickerProps }: TDateTimePicker) => {
  const { mode } = pickerProps;
  const [value, setValue] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onChange = useCallback((_event: Event, date?: Date) => {
    if (date) {
      setValue(date);
    }

    setShow(false);
  }, []);

  const onInputFocus = useCallback(() => {
    setShow(true);
  }, []);

  const minimumDate: Date = useMemo(() => new Date(), []);

  const inputValue: string = useMemo(
    () => (mode === 'date' ? value.toDateString() : value.toTimeString()),
    [mode, value],
  );

  return (
    <>
      <Input
        {...inputProps}
        disabled
        onFocus={onInputFocus}
        value={inputValue}
      />
      <DateTimePickerModal
        {...pickerProps}
        isVisible={show}
        display="spinner"
        minimumDate={minimumDate}
        onChange={onChange}
        onConfirm={onChange}
        onCancel={onChange}
      />
    </>
  );
};
