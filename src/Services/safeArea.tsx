import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import * as RNSafeArea from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { color, ColorProps, layout, LayoutProps, styleFn } from 'styled-system';

export const { useSafeAreaInsets } = RNSafeArea;

type SafeAreaViewProps = StyledViewProps & {
  children?: React.ReactNode;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  style?: ViewStyle;
  top?: boolean;
};

const styledViewStretchCss: styleFn = ({ stretch }: SafeAreaViewProps) =>
  stretch && {
    flex: 1,
  };

type StyledViewProps = ColorProps &
  LayoutProps & {
    stretch?: boolean;
  };

const StyledView = styled.View<StyledViewProps>`
  ${color}
  ${layout}

  ${styledViewStretchCss}
`;

// INFO: More details why we made our own SafeAreaView
// https://github.com/th3rdwave/react-native-safe-area-context/issues/114#issuecomment-663928390
export function SafeAreaView({
  top,
  bottom,
  left,
  right,
  style,
  ...rest
}: SafeAreaViewProps) {
  const insets = useSafeAreaInsets();
  const insetsStyle = useMemo(
    () => ({
      paddingTop: top ? insets.top : undefined,
      paddingRight: right ? insets.right : undefined,
      paddingBottom: bottom ? insets.bottom : undefined,
      paddingLeft: left ? insets.left : undefined,
    }),
    [insets, top, bottom, left, right],
  );

  // @ts-ignore
  return <StyledView {...rest} style={[style, insetsStyle]} />;
}
