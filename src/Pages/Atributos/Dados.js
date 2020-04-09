import React, {useState} from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import ModalDropdown from 'react-native-modal-dropdown';
import styles from  './Style.js'

export default function Dados() {
  const navigation = useNavigation();

  function navigateToAtributos(){
    navigation.navigate('Atributos');
  }
  
  const valoresFixos = [15,14,13,12,10,8];
  let [valoresAle,setValoresAle] = useState([0,0,0,0,0,0]);
  let [valores,setValores] = useState([0,0,0,0,0,0]);

  function gerar(){
    return 3 + Math.floor(15 * Math.random());
  }

  function mostrarValores(){
    setValoresAle(valoresAle.map(gerar))
  }


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Escolhendo Atributos</Text>
        <TouchableOpacity style={styles.headerBotao} onPress={navigateToAtributos}>
          <Text>voltar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.valores}>
        <Text  style={styles.valoresTexto}>Valores Fixos:</Text>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[0]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[1]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[2]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[3]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[4]} - </Text>
          <Text style={styles.valoresNumerosTexto}>{valoresFixos[5]}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.valores}>
        <Text style={styles.valoresTexto}>Valores Aleatórios:</Text>
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
              <Text style={styles.valoresBotao}>Gerar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.valoresEscolha}>
        <View style={styles.separar}>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Força:   </Text> 
          <ModalDropdown options={valores}
                        textStyle={styles.dropText}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList}
                        defaultValue={'-'}   />                    
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Destreza:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={styles.dropText}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList}
                        defaultValue={'-'}   />                     
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Constituição:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={styles.dropText}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList} 
                        defaultValue={'-'}   />                       
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Inteligência:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={styles.dropText}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList} 
                        defaultValue={'-'}   />                       
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Sabedoria:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={styles.dropText}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList} 
                        defaultValue={'-'}   />                        
        </View>
        <View style={styles.valoresNumeros}>
          <Text style={styles.valoresNumerosTexto}>Carisma:  </Text> 
          <ModalDropdown options={valores}
                        textStyle={styles.dropText}
                        dropdownTextStyle={styles.dropdownText}
                        dropdownStyle={styles.dropList}
                        defaultValue={'-'}   />     
        </View>
      </View>
        <View style={styles.botaoGerar}>
          <TouchableOpacity
            onPress={() => {}}>
            <Text style={styles.valoresBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
