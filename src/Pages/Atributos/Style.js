import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
  valores:{
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal:15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    backgroundColor: "#dbdbdb",
  },
  valoresNumerosTexto:{
    fontSize:24,
    paddingBottom: 5,
  },
  valoresNumeros:{
    flexDirection :'row',
  },
  valoresEscolha:{
    marginVertical:32,
    paddingHorizontal:30,
    paddingVertical: 15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    backgroundColor: "#dbdbdb",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  botaoGerar:{
    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 5,
    paddingVertical:2,
    borderRadius: 15,
    backgroundColor: "#e30000",
    alignItems: "center",
  },
  botaoNumeros:{
    justifyContent: 'space-between',
    flexDirection :'row',
  },
  dropdownText:{
    fontSize: 20,
    paddingHorizontal: 15,
  },
  dropList:{
    height:260,
  },
  indicadorEbotao:{
    height: 220,
    justifyContent: 'space-between',
  },
  indicador:{
    alignItems: 'center'
  },
  separar:{
    justifyContent: 'flex-start',
  },
  texto:{
    fontSize: 20,
    color:'#fff',
    paddingTop: 0,
    paddingBottom: 25,
  },
  body:{
    justifyContent: 'space-around',
  }
})