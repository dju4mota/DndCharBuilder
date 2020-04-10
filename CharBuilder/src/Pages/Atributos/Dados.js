import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import ModalDropdown from 'react-native-modal-dropdown';
import {Feather} from '@expo/vector-icons'
import styles from  './Style.js'
import Gstyles from  '../../GlobalStyles.js'

export default function Dados() {
  const navigation = useNavigation();

  function navigateToHome(){
    navigation.navigate('Home');
}
  
  const valoresFixos = [15,14,13,12,10,8];
  let [valoresAle,setValoresAle] = useState([7,7,7,7,7,7]);
  let [valores,setValores] = useState([0,0,0,0,0,0]);

  function gerar(){
    return 7 + Math.floor(11 * Math.random());
  }

   function mostrarValores(){
    setValoresAle(valoresAle.map(gerar));
  }

  function aleatorios(){
    setValores(valoresAle);
  }

  function fixos(){
    setValores(valoresFixos);
  }


  return (
    <View style={Gstyles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={Gstyles.header}>
        <Text style={Gstyles.font30W}>Escolhendo Atributos</Text>
        <TouchableOpacity  onPress={navigateToHome}>
          <Text style={Gstyles.white}>voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View>
          <Text style={styles.headerText}>O que são os atributos ?</Text>
          <Text style={styles.texto}>Atributos são uma breve descriçao das suas características físicas e 
            mentais, dividas em 6 partes. Eles auxiliam na maioria dos testes feitos dentro do jogo.
              Os valores variam entre 3 e 20, sendo 10 o valor médio entre as pessoas 
              comuns. 
            </Text>

            <Text style={styles.texto}>Você pode escolher entre usar os valores fixos passados pelo livro,
            ou gerar valores aleatorios</Text>
        </View>
      </View>

      <TouchableOpacity 
        onPress={fixos}
        style={styles.valores}>
        <Text  style={Gstyles.font30}>Valores Fixos:</Text>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[0]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[1]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[2]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[3]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[4]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[5]}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={aleatorios}
        style={styles.valores}>
        <Text style={Gstyles.font30}>Valores Aleatórios:</Text>
        <View style={styles.botaoNumeros}>
          <View style={styles.valoresNumeros}>
            <Text style={styles.valoresNumerosTexto}>{valoresAle[0]} - </Text>
            <Text style={styles.valoresNumerosTexto}>{valoresAle[1]} - </Text>
            <Text style={styles.valoresNumerosTexto}>{valoresAle[2]} - </Text>
            <Text style={styles.valoresNumerosTexto}>{valoresAle[3]} - </Text>
            <Text style={styles.valoresNumerosTexto}>{valoresAle[4]} - </Text>
            <Text style={styles.valoresNumerosTexto}>{valoresAle[5]} </Text>
          </View>
          <View style={styles.botaoGerar}>
            <TouchableOpacity
              onPress={mostrarValores}>
              <Text style={Gstyles.font20}>Gerar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.valoresEscolha}>
        <View style={styles.separar}>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Força:   </Text> 
          <ModalDropdown options={valores}
                        textStyle={Gstyles.font20}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList}
                        defaultValue={'-'}   />                    
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Destreza:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={Gstyles.font20}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList}
                        defaultValue={'-'}   />                     
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Constituição:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={Gstyles.font20}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList} 
                        defaultValue={'-'}   />                       
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Inteligência:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={Gstyles.font20}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList} 
                        defaultValue={'-'}   />                       
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Sabedoria:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={Gstyles.font20}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList} 
                        defaultValue={'-'}   />                        
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Carisma:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={Gstyles.font20}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList}
                        defaultValue={'-'}   />     
        </View>
        </View>
        <View style={styles.indicadorEbotao}>
          <View style={styles.indicador}>
            <Text style={Gstyles.font20}>Valores:</Text>
            <Text style={Gstyles.font20}>{valores[0]}</Text>
            <Text style={Gstyles.font20}>{valores[1]}</Text>
            <Text style={Gstyles.font20}>{valores[2]}</Text>
            <Text style={Gstyles.font20}>{valores[3]}</Text>
            <Text style={Gstyles.font20}>{valores[4]}</Text>
            <Text style={Gstyles.font20}>{valores[5]}</Text>
          </View>
          <TouchableOpacity style={styles.botaoGerar}
            onPress={() => {}}>
            <Text style={styles.Gfont20}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}
