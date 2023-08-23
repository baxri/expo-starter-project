import React from 'react';
// @ts-ignore
import { pick } from '@styled-system/props';
import { SpaceProps } from 'styled-system';

import map from 'lodash/map';

import FieldHelper from 'Components/UI/FieldHelper';
import FieldLabel from 'Components/UI/FieldLabel';
import Radio from 'Components/UI/Radio';
import { Column } from 'Components/UI/View';

interface Option {
  label: string;
  value: string;
}

type Props = SpaceProps & {
  disabled?: boolean;
  error?: boolean | string;
  label?: string;
  options?: Option[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

function RadioGroup({
  label,
  value,
  error,
  disabled = false,
  required = false,
  options = [],
  onChange,
  ...rest
}: Props) {
  const renderOption = (item: Option, index: number) => {
    const itemValue = value === item.value;

    return (
      <Radio
        disabled={disabled}
        error={error}
        key={item.value}
        label={item.label}
        mt={index === 0 ? 0 : 3}
        value={itemValue}
        onChange={() => onChange?.(item.value)}
      />
    );
  };

  return (
    <Column {...pick(rest)}>
      {!!label && (
        <FieldLabel
          label={label}
          mb={options.length > 0 ? 3 : 0}
          required={required}
        />
      )}
      {map(options, renderOption)}
      {typeof error === 'string' ? <FieldHelper error={error} mt={2} /> : null}
    </Column>
  );
}

export default RadioGroup;
