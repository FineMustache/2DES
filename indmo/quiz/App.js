// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Question1 from './src/pages/Q1';

const Stack = createNativeStackNavigator();

const quiz = require('./quiz.json')

function App() {
  quiz[0].resp = quiz[0].resp.sort(() => Math.random() - 0.5)
  quiz[1].resp = quiz[1].resp.sort(() => Math.random() - 0.5)
  quiz[2].resp = quiz[2].resp.sort(() => Math.random() - 0.5)
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Q1" component={Question1} initialParams={quiz[0]} options={{headerLeft: () => null}}/>
      <Stack.Screen name="Q2" component={Question1} initialParams={quiz[1]} options={{headerLeft: () => null}}/>
      <Stack.Screen name="Q3" component={Question1} initialParams={quiz[2]} options={{headerLeft: () => null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;