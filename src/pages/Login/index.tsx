import React from 'react';
import { Container, ImgLogo, NameApp, TextWelcome, TextTitle } from './styles';

import { ButtonLogin } from '../../components/ButtonLogin';



export function Login() {
  return(
    <Container>
      <ImgLogo source={require('../../../assets/logoEyesOnMarket.jpg')} />
      <NameApp>Eyes On Market</NameApp>
      <TextWelcome>
        Entre no seu app através de uma conta Google e confira 
        onde no mercado estão seus produtos de favoritos.
      </TextWelcome>
      <TextTitle>Login</TextTitle>
      <ButtonLogin />
    </Container>
  )
};