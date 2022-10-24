import React from 'react';
import { Container, ImgGoogle, TextLogin } from './styles';

export function ButtonLogin() {
  return(
    <Container>
      <ImgGoogle source={require('../../../assets/google.png')} />
      <TextLogin>Login</TextLogin>
    </Container>
  )
};