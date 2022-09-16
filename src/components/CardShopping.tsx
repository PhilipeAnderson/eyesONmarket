import React from 'react';

import { View, Text, TouchableOpacity, TouchableOpacityProps, Image, StyleSheet } from 'react-native';

interface ItemProps extends TouchableOpacityProps {
  prod: string;
}

export function CardShopping({ prod, ...rest }: ItemProps) {
  return(
    <View>
        <TouchableOpacity 
          style={styles.backgroundTouch}
          activeOpacity={.7}
        >
          <View style={styles.info}>
            <Text style={styles.title}>
              { prod }
            </Text>
            <Image style={styles.img} source={require('../../assets/drinkCocaCola.jpg')} />
          </View>

          <View style={styles.details}>
            <Text style={styles.textDetails}>
              Todos os Detalhes do produto inclusive valor, peso, unidade!
            </Text>
            <Text style={styles.promoDetails}>
              Produto em PROMOÇÃO!
            </Text>
            <Text style={styles.valueDetails}>
              R$: 1,49kg
            </Text>
          </View>
          
          <TouchableOpacity style={styles.btnDelete} { ... rest }>
            <Text style={styles.textDelete}> X </Text>
          </TouchableOpacity>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundTouch: {
    height: 140,
    backgroundColor: '#1F1E25',
    borderRadius: 7,
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#17ec8ccc',
    padding: 5
  },
  btnDelete: {
    width: 60,
    height: 140,
    backgroundColor: '#371630',
    borderRadius: 7,
    padding: 7
  },
  textDelete: {
    marginTop: 50,
    fontSize: 22,
    color: '#f15d5d',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  info: {
    overflow: 'hidden'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 7

  },
  details: {
    width: 180,
    padding: 5,
    textAlign: 'center'
  },
  textDetails: {
    color: '#FFF'
  },
  promoDetails: {
    color: '#44ff00',
    marginTop: 10,
    marginBottom: 7,
    fontSize: 14
  },
  valueDetails: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold'
  }
});