import React from 'react';
import BikeLogo from 'assets/images/bike.svg';

import { SafeAreaView } from 'Services/safeArea';

import { StatusBar, Text } from 'Components/UI';
import { Column, Row } from 'Components/UI/View';

function BrandedHeader() {
  return (
    <Column bg="primary" height={450} alignCenter justifyCenter>
      <StatusBar barStyle="light-content" />
      <SafeAreaView top />

      <BikeLogo fill="#ffffff" />

      <Row height="50px" alignCenter>
        <Text
          color="textContrast"
          fontSize={2}
          numberOfLines={1}
          alignCenter
          bold
          stretch
        >
          We keep you riding!
        </Text>
      </Row>
    </Column>
  );
}

export default BrandedHeader;
