import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { TextInputProps } from 'react-native';
// @ts-ignore
import { omit, pick } from '@styled-system/props';

import Accessory from './Accessory';
import Label from './Label';
import {
  Container,
  ContainerProps,
  Inner,
  Input,
  Stack,
  StyledFieldHelper,
} from './styles';

type Props = Omit<TextInputProps, 'onChange'> &
  ContainerProps & {
    disabled?: boolean;
    endAccessory?: React.ReactElement;
    error?: boolean | string;
    helper?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    startAccessory?: React.ReactElement;
    value?: string;
    onChange?: (text: string) => void;
  };

export interface Ref {
  focus(): void;
  blur(): void;
}

const TextField = forwardRef<Ref, Props>(
  (
    {
      disabled = false,
      error = false,
      helper = '',
      label = '',
      placeholder,
      required = false,
      value: propValue = '',
      endAccessory,
      startAccessory,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(propValue);
    const inputRef = useRef<Ref>();

    useEffect(() => {
      if (value !== propValue) {
        setValue(propValue);
      }
    }, [propValue]); // eslint-disable-line react-hooks/exhaustive-deps

    const focus = useCallback(() => {
      if (!disabled) {
        inputRef.current?.focus();
      }
    }, [disabled]);

    const blur = useCallback(() => {
      inputRef.current?.blur();
    }, []);

    useImperativeHandle(ref, () => ({ focus, blur }), [blur, focus]);

    const handleFocus = useCallback(() => {
      setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setFocused(false);
    }, []);

    const handleChange = useCallback(
      (nextValue: any) => {
        setValue(nextValue);
        onChange?.(nextValue);
      },
      [onChange],
    );

    return (
      <Container {...pick(rest)}>
        {label ? (
          <Label disabled={disabled} label={label} required={required} />
        ) : null}
        <Inner disabled={disabled} error={error} focused={focused}>
          <Stack>
            {startAccessory}

            <Input
              {...omit(rest)}
              disabled={disabled}
              hasEndAccessory={!!endAccessory}
              hasStartAccessory={!!startAccessory}
              placeholder={focused ? placeholder : ''}
              ref={inputRef}
              value={value}
              onBlur={handleBlur}
              onChangeText={handleChange}
              onFocus={handleFocus}
            />

            {endAccessory}
          </Stack>
        </Inner>

        {helper || typeof error === 'string' ? (
          <StyledFieldHelper error={error} value={helper} />
        ) : null}
      </Container>
    );
  },
);

const ExportTextField = TextField as typeof TextField & {
  Accessory: typeof Accessory;
};
ExportTextField.Accessory = Accessory;

export default ExportTextField;
