import React from 'react';
import { Route, SceneRendererProps } from 'react-native-tab-view';

import map from 'lodash/map';

import { Container, TabItem, TabItemLabel } from './styles';

type Props = Partial<SceneRendererProps> & {
  activeIndex?: number;
  routes?: Route[];
};

function DefaultTabBar({ routes = [], activeIndex = 0, jumpTo }: Props) {
  const renderTab = (route: Route, index: number) => {
    const active = index === activeIndex;

    return (
      <TabItem
        active={active}
        key={route.key}
        onPress={() => jumpTo?.(route.key)}
      >
        <TabItemLabel active={active} numberOfLines={1}>
          {route.title}
        </TabItemLabel>
      </TabItem>
    );
  };

  return <Container>{map(routes, renderTab)}</Container>;
}

export default DefaultTabBar;
