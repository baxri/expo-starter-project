import React from 'react';

import { Column, Row, ScrollView, Text, TouchableOpacity } from 'Components/UI';

import { SectionLink, SectionTitle } from './styles';

function DashboardScreen({ navigation }: any) {
  return (
    <Column backgroundColor="background" stretch>
      <ScrollView keyboardShouldPersistTaps="handled" px={5} py={6}>
        <Text>WALLET</Text>
      </ScrollView>
    </Column>
  );
}

export default DashboardScreen;
