import React from 'react';
import { Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Gstyles from  '../../GlobalStyles.js'

export default function Home() {
  const navigation = useNavigation();

  function navigateToAtributos(){
    navigation.navigate('Dados');
}

  return (
    <View style={Gstyles.container}>
      <Text style={Gstyles.font20W}>Home!</Text>
      <Button title='Atributos'onPress={navigateToAtributos}/>
    </View>
  );
}


