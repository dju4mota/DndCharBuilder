import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'


export default function Home() {
  const navigation = useNavigation();

  function navigateToAtributos(){
    navigation.navigate('Atributos');
}

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button title='Atributos'onPress={navigateToAtributos}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
