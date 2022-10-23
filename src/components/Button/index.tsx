import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

// interface buttonProps {
//   [onPress: string]: any
// } ou posso usar como abaixo com o ...rest !!!

// type ButtonProps = TouchableOpacityProps;
interface ButtonProps extends TouchableOpacityProps{
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7} 
        { ...rest }
      >
        <Text style={styles.buttonText}>{ title }</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3f5fed',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF'
  },
})