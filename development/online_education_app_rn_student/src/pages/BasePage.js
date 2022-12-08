import React, { useState, useEffect } from 'react';
import AppBottomNavigation from '../navigation/AppBottomNavigation';
import {Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserInfoByUserId} from '../api/UserAccountAPI';


const BasePage = ({ navigation }) => {

    useEffect(() => {

        async function fetchData() {
            const userInfoRes = await getUserInfoByUserId(1);
            const userInfo = userInfoRes.data;
            await AsyncStorage.setItem('user_info', JSON.stringify({
                user_id: userInfo.user_id,
                username: userInfo.username,
                avatarUrl: userInfo.avatar,
                role: userInfo.role,
                student_id: userInfo.profile_id,
                teacher_id: 1 // for test
            }))

        }

        fetchData();
    }, []);

    return (
            <SafeAreaView style={styles.container}>
                <AppBottomNavigation/>
            </SafeAreaView>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default BasePage;
