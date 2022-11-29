import React, {Component} from 'react';
import AppBottomNavigation from '../navigation/AppBottomNavigation';
import {Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyCoursePage from './MyCoursePage';

type Props = {};

class BasePage extends Component<Props> {
    constructor(props) {
        super(props);
        // mock user data
        AsyncStorage.setItem('user_info', JSON.stringify({
            user_id: 1,
            student_id: 1,
            teacher_id: 1
        }))
        .catch(e => {
            console.log(e);
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AppBottomNavigation/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default BasePage;
