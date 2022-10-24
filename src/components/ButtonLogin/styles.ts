import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 7px;
  background-color: #FFFFFF;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ImgGoogle = styled.Image`
  width: 35px;
  height: 35px;
  margin: 0 auto;
`;

export const TextLogin = styled.Text`
  width: 70%;
  color: #000000;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;