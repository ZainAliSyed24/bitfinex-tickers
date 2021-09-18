import React, { useState } from 'react';
import TickerList from 'src/components/TickerList/TickerList';
import { TickerType } from 'src/types/ticker.types';
import { Container } from './home.styles';

export default function HomeScreen() {
  const [tickers, setTickers] = useState<TickerType[]>([]);
  return (
    <Container>
      <TickerList tickers={tickers} />
    </Container>
  );
}
