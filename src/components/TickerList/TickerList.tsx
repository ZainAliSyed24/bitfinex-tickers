import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { TickerType } from 'src/types/ticker.types';

interface OwnProps{
    tickers:TickerType[];
}

export default function TickerList({ tickers }:OwnProps) {
  const renderItem = useCallback(() => <View />, []);
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
