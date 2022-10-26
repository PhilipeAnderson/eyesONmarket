import React from 'react';
import { Container, ImgGoogle } from './styles';

export function ButtonLogin() {
  return(
    <Container>
      <ImgGoogle source={require('../../../assets/google.png')} />
    </Container>
  )
};