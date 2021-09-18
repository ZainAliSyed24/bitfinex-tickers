import styled from 'styled-components/native';

export const TickerItemWraper = styled.Pressable`
  background-color:  ${(props) => props.theme.colors.card};
  border-radius: 5px;
  height: 120px;
  width: 90%;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  margin:5px;
  padding:5px;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export const CoinIcon = styled.Image`
  width: 50px;
  height: 50px;
  margin:10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export const Volume = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primaryTextColor};
`;

export const Changes = styled.Text`
  font-weight: bold;
  font-size: 12px;
  text-align: right;
  margin-right: 10px;
  color: ${(props:{isGreen:boolean}) => (props.isGreen ? 'green' : 'red')};
`;
