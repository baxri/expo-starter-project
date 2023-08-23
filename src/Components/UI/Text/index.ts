import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  styleFn,
  typography,
  TypographyProps,
  width,
  WidthProps,
} from 'styled-system';

export type Props = ColorProps &
  SpaceProps &
  TypographyProps &
  WidthProps & {
    alignCenter?: boolean;
    bold?: boolean;
    light?: boolean;
    semiBold?: boolean;
    shrink?: boolean;
    stretch?: boolean;
    underline?: boolean;
    italic?: boolean;
  };

const boldCss: styleFn = ({ bold }: Props) =>
  bold &&
  css`
    font-weight: ${themeGet('fontWeights.3')};
  `;

const semiBoldCss: styleFn = ({ semiBold }: Props) =>
  semiBold &&
  css`
    font-weight: ${themeGet('fontWeights.2')};
  `;

const lightCss: styleFn = ({ light }: Props) =>
  light &&
  css`
    font-weight: ${themeGet('fontWeights.0')};
  `;

const alignCenterCss: styleFn = ({ alignCenter }: Props) =>
  alignCenter &&
  css`
    text-align: center;
  `;

const shrinkCss: styleFn = ({ shrink }: Props) =>
  shrink &&
  css`
    flex-shrink: 1;
  `;

const stretchCss: styleFn = ({ stretch }: Props) =>
  stretch &&
  css`
    flex: 1;
  `;

const underlineCss: styleFn = ({ underline }: Props) =>
  underline &&
  css`
    text-decoration-line: underline;
  `;

const Text = styled.Text<Props>`
  ${color}
  ${space}
  ${typography}
  ${width}

  ${alignCenterCss}
  ${boldCss}
  ${lightCss}
  ${semiBoldCss}
  ${shrinkCss}
  ${stretchCss}
  ${underlineCss}
`;

Text.defaultProps = {
  color: 'secondary2',
  // fontFamily: 'primary',
  fontSize: 2,
  fontWeight: 1,
  // allowFontScaling: false,
};

export default Text;
