import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BasePage from '../pages/BasePage';
import CourseDetailPage from '../pages/CourseDetailPage';
import AppStackHeader from './AppStackHeader';

/**
 * Navigation between Course page and individual course detail page
 */


const Stack = createStackNavigator();

const AppStackNavigation = () => {

    return (
        <Stack.Navigator
            initialRouteName="BasePage"
            screenOptions={{
                headerMode: "screen",
                header: (props) => {
                    return <AppStackHeader {...props} />
                }
            }}
        >
            <Stack.Screen
                name="BasePage"
                component={BasePage}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="CourseDetailPage"
                component={CourseDetailPage}
                options={{ headerTitle: 'Course Details'}}
            />
        </Stack.Navigator>
    )
}

export default AppStackNavigation;
