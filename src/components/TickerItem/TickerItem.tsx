import React from 'react';
import { TickerType } from 'src/types';
import { getCoinIcon } from 'src/requests';
import { View } from 'react-native';
import {
  Changes,
  CoinIcon, Price, Row, TickerItemWraper, Title, Volume,
} from './ticker.styles';

interface OwnProps{
    ticker:TickerType
}
export function TickerItem({ ticker }:OwnProps) {
  return (
    <TickerItemWraper>
      <Row>
        <CoinIcon source={{ uri: getCoinIcon(ticker.baseAsset) }} />
        <View>
          <Title>{`${ticker.baseAsset} / ${ticker.quoteAsset}`}</Title>
          <Volume>{`${ticker.volume} ${ticker.quoteAsset}`}</Volume>
        </View>
      </Row>
      <View>
        <Price>{ticker.lastPrice}</Price>
        <Changes isGreen={Number(ticker.change24h) > 0}>{`${Number(ticker.change24h).toFixed(1)}%`}</Changes>
      </View>
    </TickerItemWraper>
  );
}
