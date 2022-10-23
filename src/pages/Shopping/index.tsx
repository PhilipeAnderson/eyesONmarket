import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { CardShopping } from '../../components/CardShopping';

interface produtoData {
  id: string;
  name: string;
  date?: Date;
}

export function Shopping() {
  const [newProduto, setNewProduto] = useState('');
  const [meusProdutos, setMeusProdutos] = useState<produtoData[]>([]);
  const [greeting, setGreeting] = useState('');


  function handleAddNewProduto() {
    const data = {
      id: String(new Date().getTime()),
      name: newProduto
    }
      setMeusProdutos(oldState => [...oldState, data]);
  }

  function handleRemoveProduto(id: string){
    setMeusProdutos(oldState => oldState.filter(
      prod => prod.id !== id
    ));
  };

  useEffect(() => {
    
    const currentHour = new Date().getHours();

    if(currentHour < 15){
      setGreeting('Bom dia!')
    }else if(currentHour < 21){
      setGreeting('Boa Tarde!')
    }else{
      setGreeting('Boa Noite!')
    };

  }, []);

  return(
    <View style={styles.container}>
      
      <Text style={styles.greetings}>
        { greeting }
      </Text>

      <Text style={styles.title}>
        Philipe
      </Text>

      <Input titlePlaceHolder="Encontre seus Produtos Aqui!" onChangeText={ setNewProduto } />

      <Button title="Encontrar Produto" onPress={ handleAddNewProduto } />

      <Text style={styles.minhaLista}> Adicionar Para Compras</Text>

      

      <FlatList
        data={meusProdutos}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <CardShopping 
            prod={ item.name }
            onPress={() => handleRemoveProduto(item.id)}
          />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 7
  },
  minhaLista: {
    color: '#FFF',
    fontSize: 22,
    marginTop: 25,
    marginBottom: 10
  },
  greetings: {
    color: '#FFF',
    fontSize: 16
  }
})