import React, { useCallback, useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { DateTime } from 'luxon';
import Modal from 'react-native-modal';

import { SafeAreaView } from 'Services/safeArea';

import Styles, { Content, DateTimePicker } from './styles';

enum PickerMode {
  Date = 'date',
  Time = 'time',
}

enum PickerDisplay {
  Spinner = 'spinner',
  Default = 'default',
  Clock = 'clock',
  Compact = 'compact',
  Inline = 'inline',
  Calendar = 'calendar',
}

type Props = {
  display?: PickerDisplay;
  maximumValue?: DateTime;
  minimumValue?: DateTime;
  time?: boolean;
  value?: DateTime;
  visible?: boolean;
  onChange?: (value: DateTime) => void;
  onRequestClose?: () => void;
};

function DateTimePickerSheet({
  display = PickerDisplay.Spinner,
  maximumValue,
  minimumValue,
  value,
  time = false,
  visible = false,
  onChange,
  onRequestClose,
}: Props) {
  const [date, setDate] = useState(() =>
    value ? value.toJSDate() : new Date(),
  );

  useEffect(() => {
    if (value) {
      setDate(value.toJSDate?.());
    }
  }, [value]);

  const handleChange = useCallback(
    (event: any, pickerDate?: Date) => {
      if (pickerDate) {
        onChange?.(DateTime.fromJSDate(pickerDate));
      }
    },
    [onChange],
  );

  const handleAndroidChange = useCallback(
    (event: any, pickerDate?: Date) => {
      if (pickerDate) {
        onChange?.(DateTime.fromJSDate(pickerDate));
      }

      onRequestClose?.();
    },
    [onChange, onRequestClose],
  );

  if (Platform.OS === 'android') {
    return (
      <>
        {visible ? (
          <DateTimePicker
            display={display}
            maximumDate={maximumValue?.toJSDate()}
            minimumDate={minimumValue?.toJSDate()}
            mode={time ? PickerMode.Time : PickerMode.Date}
            value={date}
            onChange={handleAndroidChange}
          />
        ) : undefined}
      </>
    );
  }

  return (
    <Modal
      backdropOpacity={0.2}
      backdropTransitionOutTiming={0} // Avoids backdrop flickering on close
      isVisible={visible}
      style={Styles.modal}
      onBackdropPress={onRequestClose}
    >
      <Content p={5}>
        {visible ? (
          <DateTimePicker
            display={display}
            maximumDate={maximumValue?.toJSDate()}
            minimumDate={minimumValue?.toJSDate()}
            mode={time ? PickerMode.Time : PickerMode.Date}
            value={date}
            onChange={handleChange}
          />
        ) : undefined}

        <SafeAreaView bottom />
      </Content>
    </Modal>
  );
}

export default DateTimePickerSheet;
