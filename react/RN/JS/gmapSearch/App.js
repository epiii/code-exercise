import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MapScreen from "./src/screens/MapScreen";
import SearchScreen from './src/screens/SearchScreen';
import CobaScreen from './src/screens/CobaScreen';

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MapScreen'
            component={MapScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='SearchScreen'
            component={SearchScreen}
            options={{
              headerShown: false
            }}
          />
          {/* <Stack.Screen
            name='CobaScreen'
            component={CobaScreen}
            options={{
              headerShown: false
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
