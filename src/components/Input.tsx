import React from 'react';

import { View, TextInput, TextInputProps, StyleSheet, Platform } from 'react-native';

// interface setNewProdProps {
//   handleProduto: string;
// } ou usar da forma abaixo com o ...rest !!!

// type InputProps = TextInputProps;

interface InputProps extends TextInputProps {
  titlePlaceHolder: string;
}

export function Input({ titlePlaceHolder, ...rest }: InputProps ) {
  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder={ titlePlaceHolder }
        placeholderTextColor="#555"
        { ...rest }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 20,
    borderRadius: 7,
    marginBottom: 10
  }
})