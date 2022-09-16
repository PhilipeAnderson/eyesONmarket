import React from 'react';

import { View, Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

interface ItemProps extends TouchableOpacityProps {
  prod: string;
}

export function CardFavorite({ prod, ...rest }: ItemProps) {
  return(
    <View>
        <TouchableOpacity 
          style={styles.backgroundTouch}
          activeOpacity={.7}
        >
          <Text style={styles.items}>
            { prod }
          </Text>
          <TouchableOpacity style={styles.btnDelete} { ... rest }>
            <Text style={styles.textDelete}> X </Text>
          </TouchableOpacity>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    fontSize: 20,
    color: '#17ec8ccc',
    padding: 10
  },
  backgroundTouch: {
    backgroundColor: '#1F1E25',
    borderRadius: 7,
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btnDelete: {
    width: 60,
    backgroundColor: '#371630',
    borderRadius: 7,
    padding: 7
  },
  textDelete: {
    color: '#f15d5d',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})