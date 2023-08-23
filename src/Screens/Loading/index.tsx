import React from 'react';

import { Column, ScrollView, Spinner } from 'Components/UI';

function LoadingScreen() {
  return (
    <ScrollView contentStretch>
      <Column alignCenter justifyCenter stretch>
        <Spinner size={30} />
      </Column>
    </ScrollView>
  );
}

export default LoadingScreen;
