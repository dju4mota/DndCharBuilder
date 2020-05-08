import React from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Gstyles from  '../../GlobalStyles.js'

export default function Home() {
  const navigation = useNavigation();

  function navigateToAtributos(){
    navigation.navigate('Dados');
}

  return (
    <View style={Gstyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={Gstyles.font20W}>Home!</Text>
        <TouchableHighlight onPress={navigateToAtributos}>
          <Text>Atributos</Text>  
        </TouchableHighlight>



      </ScrollView>
    </View>
  );
}


