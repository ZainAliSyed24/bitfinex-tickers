import styled from 'styled-components/native';

export const PairItemWraper = styled.Pressable`
  padding: 10px;
  width: 90px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border-radius: 5px;
  background-color: ${(props:{isSelected:boolean}) => (props.isSelected ? '#01A781' : '#c7c9d6')};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primaryTextColor};
  font-weight: ${(props:{isSelected:boolean}) => (props.isSelected ? 'bold' : 'normal')};
`;
