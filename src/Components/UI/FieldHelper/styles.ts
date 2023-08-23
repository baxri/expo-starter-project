import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components/native';
import { mapToTheme } from 'styled-map';

import Text from 'Components/UI/Text';

type ValueProps = {
  error?: boolean | string;
};

export const Value = styled(Text)<ValueProps>`
  color: ${mapToTheme('fieldHelper.value.color')};
  font-size: ${themeGet('fieldHelper.value.fontSize')}px;
`;
