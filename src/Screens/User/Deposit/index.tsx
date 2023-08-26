import React from 'react';

import { Column, Row, ScrollView, Text, TouchableOpacity } from 'Components/UI';

import { SectionLink, SectionTitle } from './styles';

function DepositScreen({ navigation }: any) {
  return (
    <Column backgroundColor="background" stretch>
      <ScrollView keyboardShouldPersistTaps="handled" px={5} py={6}>
        <Text>DEPOSIT</Text>
      </ScrollView>
    </Column>
  );
}

export default DepositScreen;
