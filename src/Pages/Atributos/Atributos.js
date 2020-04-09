import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Atributos() {
  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
}
function navigateToDados(){
  navigation.navigate('Dados');
}
  return (
    <View style={styles.container}>
      <View>
        <Text>Escolhendo Atributos</Text>
        <Button title='home' onPress={navigateToHome}/>
      </View>
      <View>
        <Text>Qual Metodo Usar ?</Text>
        <Button title='Dados' onPress={navigateToDados}/>
      </View>
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
