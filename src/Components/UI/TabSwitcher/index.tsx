import React from 'react';

import { Container, TabButton, TabButtonActive, TabText } from './styles';

function TabSwitcher({ options, value, onChange }: any) {
  return (
    <Container>
      {options?.map((option: any, index: number) => {
        const ButtonComponent =
          value === option.value ? TabButtonActive : TabButton;

        return (
          <ButtonComponent key={index} onPress={() => onChange(option.value)}>
            <TabText>{option.label}</TabText>
          </ButtonComponent>
        );
      })}
    </Container>
  );
}

export default TabSwitcher;
