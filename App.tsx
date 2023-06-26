/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScoreCrad from './components/ScoreCrad';
import SecondQes from './components/SecondQes';
const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="secondQes" component={SecondQes} />
          <Stack.Screen name="scoreCrad" component={ScoreCrad} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
