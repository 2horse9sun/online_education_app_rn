import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import AppStackNavigation from './src/navigation/AppStackNavigation';


const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

