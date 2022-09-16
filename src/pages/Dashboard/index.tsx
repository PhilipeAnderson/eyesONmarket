import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Dashboard() {
  const [greeting, setGreeting] = useState('');

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

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 7
  },
  greetings: {
    color: '#FFF',
    fontSize: 16
  }
})