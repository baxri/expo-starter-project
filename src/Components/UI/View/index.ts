import { themeGet } from '@styled-system/theme-get';
import styled, { css } from 'styled-components/native';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  RequiredTheme,
  ResponsiveValue,
  space,
  SpaceProps,
  styleFn,
  system,
  Theme,
  ThemeValue,
} from 'styled-system';

interface BorderRadiusProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType>,
> {
  borderBottom?: boolean;
  borderTop?: boolean;
  borderRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
  borderTopRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
  borderBottomRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export type Props = BorderRadiusProps &
  FlexboxProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  SpaceProps &
  PositionProps & {
    absoluteFill?: boolean;
    alignCenter?: boolean;
    alignEnd?: boolean;
    alignStart?: boolean;
    borderBottom?: boolean;
    borderTop?: boolean;
    circle?: boolean;
    fullHeight?: boolean;
    fullWidth?: boolean;
    invisible?: boolean;
    justifyAround?: boolean;
    justifyCenter?: boolean;
    justifyBetween?: boolean;
    justifyEnd?: boolean;
    noShrink?: boolean;
    shrink?: boolean;
    stretch?: boolean;
  };

const absoluteFillCss: styleFn = ({ absoluteFill }: Props) =>
  absoluteFill &&
  css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `;

const alignStartCss: styleFn = ({ alignStart }: Props) =>
  alignStart &&
  css`
    align-items: flex-start;
  `;

const alignCenterCss: styleFn = ({ alignCenter }: Props) =>
  alignCenter &&
  css`
    align-items: center;
  `;

const alignEndCss: styleFn = ({ alignEnd }: Props) =>
  alignEnd &&
  css`
    align-items: flex-end;
  `;

const borderRadius = system({
  borderRadius: { property: 'borderRadius', scale: 'space' },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'space',
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'space',
  },
});

const borderBottomCss: styleFn = ({ borderBottom }: Props) =>
  borderBottom &&
  css`
    border-color: ${themeGet('colors.divider')};
    border-bottom-width: 1px;
  `;

const borderTopCss: styleFn = ({ borderTop }: Props) =>
  borderTop &&
  css`
    border-color: ${themeGet('colors.divider')};
    border-top-width: 1px;
  `;

const circleCss: styleFn = ({ circle }: Props) =>
  circle &&
  css`
    border-radius: 9999px;
  `;

const fullHeightCss: styleFn = ({ fullHeight }: Props) =>
  fullHeight &&
  css`
    height: 100%;
  `;

const fullWidthCss: styleFn = ({ fullWidth }: Props) =>
  fullWidth &&
  css`
    width: 100%;
  `;

const invisibleCss: styleFn = ({ invisible }: Props) =>
  invisible &&
  css`
    opacity: 0;
  `;

const justifyAroundCss: styleFn = ({ justifyAround }: Props) =>
  justifyAround &&
  css`
    justify-content: space-around;
  `;

const justifyCenterCss: styleFn = ({ justifyCenter }: Props) =>
  justifyCenter &&
  css`
    justify-content: center;
  `;

const justifyEndCss: styleFn = ({ justifyEnd }: Props) =>
  justifyEnd &&
  css`
    justify-content: flex-end;
  `;

const justifyBetweenCss: styleFn = ({ justifyBetween }: Props) =>
  justifyBetween &&
  css`
    justify-content: space-between;
  `;

const shrinkCss: styleFn = ({ shrink }: Props) =>
  shrink &&
  css`
    flex-shrink: 1;
  `;

const noShrinkCss: styleFn = ({ noShrink }: Props) =>
  noShrink &&
  css`
    flex-shrink: 0;
  `;

const stretchCss: styleFn = ({ stretch }: Props) =>
  stretch &&
  css`
    flex: 1;
  `;

const Element = styled.View<Props>`
  ${color}
  ${layout}
  ${space}
  ${border}
  ${position}
  ${flexbox}

  ${absoluteFillCss}
  ${alignCenterCss}
  ${alignEndCss}
  ${alignStartCss}
  ${borderRadius}
  ${borderBottomCss}
  ${borderTopCss}
  ${circleCss}
  ${fullHeightCss}
  ${fullWidthCss}
  ${invisibleCss}
  ${justifyCenterCss}
  ${justifyEndCss}
  ${justifyAroundCss}
  ${justifyBetweenCss}
  ${noShrinkCss}
  ${shrinkCss}
  ${stretchCss}
`;

const Column = styled(Element)<Props>`
  flex-direction: column;
`;

const Row = styled(Element)<Props>`
  flex-direction: row;
`;

export { Column, Row };
