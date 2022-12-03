import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BasePage from '../pages/BasePage';
import CourseDetailPage from '../pages/CourseDetailPage';
import AppStackHeader from './AppStackHeader';
import NewCoursePage from '../pages/NewCoursePage';
import CourseAssignmentPage from '../pages/CourseAssignmentPage';

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
            <Stack.Screen
                name="NewCoursePage"
                component={NewCoursePage}
                options={{ headerTitle: 'Back'}}
            />
            <Stack.Screen
                name="CourseAssignmentPage"
                component={CourseAssignmentPage}
                options={{ headerTitle: 'Assignments'}}
            />
        </Stack.Navigator>
    )
}

export default AppStackNavigation;
