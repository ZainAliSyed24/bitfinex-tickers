import React from 'react';
import { TickerType } from 'src/types';
import { TickerItemWraper, Title } from './ticker.styles';

interface OwnProps{
    ticker:TickerType
}
export function TickerItem({ ticker }:OwnProps) {
  return (
    <TickerItemWraper>
      <Title>{`${ticker.baseAsset} / ${ticker.quoteAsset}`}</Title>
    </TickerItemWraper>
  );
}
