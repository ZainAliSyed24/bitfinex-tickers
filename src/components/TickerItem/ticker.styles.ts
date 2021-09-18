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
