import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import Banner from 'assets/banners/banner.svg';
import { useTranslation } from 'react-i18next';
import { borderWidth } from 'styled-system';

import FlatList from '../FlatList';
import { Column } from '../View';
import {
  Description,
  ImageBox,
  Indicator,
  IndicatorWraper,
  ItemContainer,
  SubTitle,
  Title,
} from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

function WelcomeCarusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const handleMomentumScrollEnd = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SCREEN_WIDTH);
    setCurrentIndex(index);
  };

  const data = [
    {
      id: 1,
      color: 'red',
      banner: () => <Banner />,
      title: t('banner1Title'),
      subTitle: t('bannerSubTitle1'),
      description: t('banner1Description'),
    },
    {
      id: 2,
      color: 'blue',
      banner: () => <Banner />,
      title: t('banner1Title'),
      subTitle: t('bannerSubTitle1'),
      description: t('banner1Description'),
    },
    {
      id: 3,
      color: 'green',
      banner: () => <Banner />,
      title: t('banner1Title'),
      subTitle: t('bannerSubTitle1'),
      description: t('banner1Description'),
    },
  ];

  const renderItem = ({ item }: any) => (
    <ItemContainer px={5} alignCenter>
      <ImageBox>{item.banner()}</ImageBox>
      <SubTitle>{item.subTitle}</SubTitle>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </ItemContainer>
  );

  return (
    <Column>
      <FlatList
        data={data}
        decelerationRate="fast"
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      <IndicatorWraper justifyCenter>
        {data.map((_, index) => (
          <Indicator isActive={index === currentIndex} key={_.id} />
        ))}
      </IndicatorWraper>
    </Column>
  );
}

export default WelcomeCarusel;
