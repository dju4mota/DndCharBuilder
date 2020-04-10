import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#000'
  },
  header:{
    flexDirection : 'row',
    justifyContent: 'space-between',
    paddingBottom: 40,
    alignItems: 'center',
  },
  font30:{
    fontSize: 30
  },
  font20:{
    fontSize: 20,
  },
  font30W:{
    fontSize: 30,
    color: '#fff'
  },
  font20W:{
    fontSize: 20,
    color: '#fff'
  },
  white:{
    color: '#fff'
  }
});