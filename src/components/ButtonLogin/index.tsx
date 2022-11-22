import React from 'react';

import * as AuthSession from 'expo-auth-session';

import { Container, ImgGoogle } from './styles';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
}

export function ButtonLogin() {

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = "146877447882-9cgdvfh16md2kd5g1qo2lle7coddkp04.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@philipeacampos/eyesonmarket";
      ";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      console.log(type, params)

    } catch (error) {
      console.log(error)
    }
  }

  return(
    <Container
      onPress = { handleGoogleSignIn }
    >
      <ImgGoogle source={require('../../../assets/google.png')} />
    </Container>
  )
};