import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home/Home'
import Atributos from './Pages/Atributos/Atributos'
import Dados from './Pages/Atributos/Dados'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Atributos" component={Atributos} />
        <Stack.Screen name="Dados" component={Dados} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;