import React, {Component} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MyCoursePage from '../pages/MyCoursePage';
import MyAssignmentPage from '../pages/MyAssignmentPage';
import MyMessagePage from '../pages/MyMessagePage';
import MyExamPage from '../pages/MyExamPage';
import MyProfilePage from '../pages/MyProfile';
const Tab = createMaterialBottomTabNavigator();



type Props = {};

class AppBottomNavigation extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
      return (
          <Tab.Navigator
            initialRouteName="MyCoursePage"
            // activeColor="#e91e63"
            // barStyle={{ backgroundColor: 'tomato' }}
            shifting={true}
          >
            <Tab.Screen
              name="MyCoursePage"
              component={MyCoursePage}
              options={{
                tabBarLabel: 'Course',
                tabBarIcon: ({ color }) => (
                  <Entypo name="book" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="MyAssignmentPage"
              component={MyAssignmentPage}
              options={{
                tabBarLabel: 'Assignment',
                tabBarIcon: ({ color }) => (
                  <Entypo name="pencil" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="MyMessagePage"
              component={MyMessagePage}
              options={{
                tabBarLabel: 'Message',
                tabBarIcon: ({ color }) => (
                  <Entypo name="typing" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="MyExamPage"
              component={MyExamPage}
              options={{
                tabBarLabel: 'Exam',
                tabBarIcon: ({ color }) => (
                  <Entypo name="graduation-cap" color={color} size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="MyProfilePage"
              component={MyProfilePage}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                  <Entypo name="user" color={color} size={26} />
                ),
              }}
            />
          </Tab.Navigator>
      );
    }
}

export default AppBottomNavigation;