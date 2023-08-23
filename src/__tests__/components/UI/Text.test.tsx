import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { ThemeID, THEMES } from 'Theme';

import { Text } from 'Components/UI';

test('Text renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={THEMES[ThemeID.Main]}>
        <Text>TEXT</Text>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
