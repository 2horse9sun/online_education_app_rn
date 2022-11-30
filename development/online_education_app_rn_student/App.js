import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigation from './src/navigation/AppStackNavigation';
import AppBottomNavigation from './src/navigation/AppBottomNavigation';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
          <NavigationContainer>
            <AppStackNavigation />
          </NavigationContainer>
        );
    }
}

