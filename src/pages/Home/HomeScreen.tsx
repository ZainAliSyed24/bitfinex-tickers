import React, { useEffect, useState } from 'react';
import { TickerList } from 'src/components';
import { TickerType } from 'src/types';
import { getAllTickers } from 'src/requests';
import { useQuery } from 'react-query';
import { parseResponseData } from 'src/utils/parser';
import { Container } from './home.styles';

export default function HomeScreen() {
  const [tickers, setTickers] = useState<TickerType[]>([]);

  const { data } = useQuery('tickers',
    () => getAllTickers().then((res) => res.json()));

  useEffect(() => {
    if (data) {
      const result = parseResponseData(data);
      setTickers(result);
    }
  }, [data]);

  return (
    <Container>
      <TickerList tickers={tickers} />
    </Container>
  );
}
