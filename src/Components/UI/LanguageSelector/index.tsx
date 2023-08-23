import React, { ComponentProps, useMemo, useState } from 'react';
import EnIcon from 'assets/images/languages/en.svg';

import find from 'lodash/find';
import isNil from 'lodash/isNil';

import { set, useLocale } from 'Services/Store/language';

import ListSheet from 'Components/UI/ListSheet';

import { Row } from '../View';
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
  required?: boolean;
  value?: string | null;
  options?: ListSheetProps['options'];
  onChange?: (value: string) => void;
};

function LanguageSelector({
  error = false,
  helper = '',
  disabled = false,
  required = false,
  ...rest
}: Props) {
  const [sheetVisible, setSheetVisible] = useState(false);
  const { locale } = useLocale();
  const [value, onChange] = useState(locale);

  const options = [
    {
      id: 'en',
      title: 'English',
      icon: () => <EnIcon />,
    },
    {
      id: 'se',
      title: 'Spanish',
      icon: () => <EnIcon />,
    },
  ];

  const handleSheetClose = () => {
    setSheetVisible(false);
  };

  const handleSheetSelect = (option?: { id: string; title: string }) => {
    if (option && onChange) {
      onChange(option.id);
      set(option.id);
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
      <Row alignItems="center">
        {selectedOption && <>{selectedOption.icon()}</>}

        <ChevronContainer>
          <Chevron />
        </ChevronContainer>
      </Row>

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

export default LanguageSelector;
