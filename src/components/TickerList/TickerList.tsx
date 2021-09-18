import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { TickerType } from 'src/types';
import { TickerItem } from 'src/components';

interface OwnProps{
    tickers:TickerType[];
}

export function TickerList({ tickers }:OwnProps) {
  const renderItem = useCallback(({ item }) => <TickerItem ticker={item} />, []);
  const keyExtractor = useCallback((item) => item.symbol, []);
  return (
    <View>
      <FlatList
        data={tickers}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}
