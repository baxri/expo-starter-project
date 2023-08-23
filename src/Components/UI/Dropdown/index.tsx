import React, { ComponentProps, useMemo, useState } from 'react';

import find from 'lodash/find';
import isNil from 'lodash/isNil';

import ListSheet from 'Components/UI/ListSheet';

import Label from './Label';
import {
  Chevron,
  ChevronContainer,
  Container,
  ContainerProps,
  Inner,
  StyledFieldHelper,
  Value,
  ValueContainer,
} from './styles';

type ListSheetProps = ComponentProps<typeof ListSheet>;

type Props = ContainerProps & {
  disabled?: boolean;
  error?: boolean | string;
  helper?: string;
  label?: string;
  required?: boolean;
  value?: string | null;
  options?: ListSheetProps['options'];
  onChange?: (value: string) => void;
};

function Dropdown({
  label = '',
  value = '',
  error = false,
  helper = '',
  options,
  disabled = false,
  required = false,
  onChange,
  ...rest
}: Props) {
  const [sheetVisible, setSheetVisible] = useState(false);

  const handleSheetClose = () => {
    setSheetVisible(false);
  };
  const handleSheetSelect = (option?: { id: string; title: string }) => {
    if (option && onChange) {
      onChange(option.id);
    }
  };

  const selectedOption = useMemo(() => {
    if (isNil(value)) {
      return null;
    }

    return find(options, { id: value });
  }, [value, options]);

  return (
    <Container {...rest} onPress={() => setSheetVisible(true)}>
      <Inner error={error}>
        {!!label && (
          <Label
            active={!!selectedOption}
            disabled={disabled}
            label={label}
            required={required}
          />
        )}

        <ValueContainer>
          {selectedOption && (
            <Value numberOfLines={1}>{selectedOption.title}</Value>
          )}
        </ValueContainer>

        <ChevronContainer>
          <Chevron />
        </ChevronContainer>
      </Inner>

      {helper || typeof error === 'string' ? (
        <StyledFieldHelper error={error} value={helper} />
      ) : null}

      <ListSheet
        options={options}
        value={value}
        visible={sheetVisible}
        onClose={handleSheetClose}
        onSelect={handleSheetSelect}
      />
    </Container>
  );
}

export default Dropdown;
