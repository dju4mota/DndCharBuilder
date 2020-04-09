import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header:{
    flexDirection : 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerText:{
    fontSize:30,
  },
  hedaerBotao:{

  },
  valores:{
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal:15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 25,
    backgroundColor: "#dbdbdb",
    
  },
  valoresTexto:{
    fontSize:30,
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
  valoresBotao:{
    fontSize: 20,
    color: '#E3E3E3'
  },
  botaoGerar:{
    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 5,
    paddingVertical:2,
    borderRadius: 15,
    backgroundColor: "#CC4A4A",
  },
  botaoNumeros:{
    justifyContent: 'space-between',
    flexDirection :'row',
  },
  dropText:{
    fontSize: 20,

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
  numerosIndicador:{
    fontSize: 20,
  },
  indicador:{
    alignItems: 'center'
  },
  separar:{
    justifyContent: 'flex-start',
  }
})