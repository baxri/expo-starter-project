import React, { useCallback, useMemo, useState } from 'react';
import { DateTime } from 'luxon';

import Label from './Label';
import Sheet from './Sheet';
import {
  AccessoryContainer,
  Container,
  ContainerProps,
  DateAccessory,
  Inner,
  StyledFieldHelper,
  TimeAccessory,
  Value,
  ValueContainer,
} from './styles';

type Props = ContainerProps & {
  disabled?: boolean;
  error?: boolean | string;
  helper?: string;
  label?: string;
  required?: boolean;
  time?: boolean;
  minimumValue?: DateTime;
  value?: DateTime;
  onChange?: (value: DateTime) => void;
};

function DateTimePicker({
  label = '',
  value,
  error = false,
  helper = '',
  disabled = false,
  required = false,
  time = false,
  minimumValue,
  onChange,
  ...rest
}: Props) {
  const [sheetVisible, setSheetVisible] = useState(false);

  const valueStr = useMemo(() => {
    if (!value) {
      return null;
    }

    return time
      ? value.toLocaleString(DateTime.TIME_SIMPLE)
      : value.toLocaleString(DateTime.DATE_SHORT);
  }, [value, time]);

  const handleSheetRequestClose = useCallback(() => {
    setSheetVisible(false);
  }, []);

  return (
    <Container {...rest} onPress={() => setSheetVisible(true)}>
      <Inner error={error}>
        {!!label && (
          <Label
            active={!!valueStr}
            disabled={disabled}
            label={label}
            required={required}
          />
        )}

        <ValueContainer>{valueStr && <Value>{valueStr}</Value>}</ValueContainer>
        <AccessoryContainer>
          {time ? <TimeAccessory /> : <DateAccessory />}
        </AccessoryContainer>
      </Inner>

      {helper || typeof error === 'string' ? (
        <StyledFieldHelper error={error} value={helper} />
      ) : null}

      <Sheet
        minimumValue={minimumValue}
        time={time}
        value={value}
        visible={sheetVisible}
        onChange={onChange}
        onRequestClose={handleSheetRequestClose}
      />
    </Container>
  );
}

export default DateTimePicker;
