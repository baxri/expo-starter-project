import React from 'react';

import { Column, Row, ScrollView, Text, TouchableOpacity } from 'Components/UI';

import { SectionLink, SectionTitle } from './styles';

function DashboardScreen({ navigation }: any) {
  return (
    <Column backgroundColor="background" stretch>
      <ScrollView keyboardShouldPersistTaps="handled" px={5} py={6}>
        <Text>DASHBOARD</Text>
      </ScrollView>
    </Column>
  );
}

function SectionHeader({ title, link, onPress }: any) {
  return (
    <Row mt={32} justifyBetween>
      <SectionTitle>{title}</SectionTitle>
      <TouchableOpacity onPress={onPress}>
        <SectionLink>{link}</SectionLink>
      </TouchableOpacity>
    </Row>
  );
}

export default DashboardScreen;
