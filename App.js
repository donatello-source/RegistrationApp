import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./components/Main.js"
import Users from "./components/Users.js"
import Details from "./components/Details.js"

const Stack = createNativeStackNavigator();

function App() {
  return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen style={{flex:1}}name="s1" options={{headerShown: false}} component={Main}  /> 
              <Stack.Screen name="s2" component={Users}  />     
              <Stack.Screen name ="s3" component={Details}/>          
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default App;