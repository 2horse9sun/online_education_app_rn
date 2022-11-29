import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashPage from '../pages/SplashPage';
import BasePage from '../pages/BasePage';
import CourseDetailPage from '../pages/CourseDetailPage';

const Stack = createStackNavigator();

type Props = {};

class AppStackNavigation extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Stack.Navigator
        initialRouteName="SplashPage"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen
                name="SplashPage"
                component={SplashPage}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="BasePage"
                component={BasePage}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="CourseDetailPage"
                component={CourseDetailPage}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
      );
    }
}

export default AppStackNavigation;
