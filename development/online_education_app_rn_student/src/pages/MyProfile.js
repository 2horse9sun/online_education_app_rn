import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import AppbarHeader from '../components/AppbarHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStudentInfoByStudentId } from '../api/StudentAPI';
import { formatYear } from '../utils/DateHandler';

/**
 * Profile page, showing all the necessary user information,
 * e.g., user numbers, grade, school years etc.
 * 
 */

const MyProfilePage = () => {

    const [userData, setUserData] = useState({});

    useEffect(() => {

        async function fetchUserData() {
            let userInfo = await AsyncStorage.getItem("user_info");
            userInfo = JSON.parse(userInfo);

            const studentInfoRes = await getStudentInfoByStudentId(userInfo.student_id);
            const studentInfo = studentInfoRes.data;

            setUserData({
                firstName: studentInfo.first_name,
                lastName: studentInfo.last_name,
                studentNumber: studentInfo.student_number,
                className: studentInfo.class_name,
                classStartYear: formatYear(studentInfo.class_start_date),
                classEndYear: formatYear(studentInfo.class_end_date),
                avatarUrl: userInfo.avatarUrl,
                grade: 12
            });
        }

        fetchUserData();
    }, []);
    
    return (
        <View style={styles.container}>
            <AppbarHeader title="Profile" />
            {/** Icon */}
            <View style={styles.icon_container}>
                <Avatar.Image size={150} source={{uri: userData.avatarUrl}} />
            </View>

            {/* Student number  */}
            <Text style={styles.titleText}>
                {userData.firstName} {userData.lastName} 
            </Text>
            <Text style={styles.studentNu}>
                Student No. {userData.studentNumber}
            </Text>

            {/* Class information  */}
            <View style={ styles.infoContainer}>
                <Text style={styles.infoText}>
                    Year: {userData.classStartYear} - {userData.classEndYear}
                </Text >
                <Text style={styles.infoText}>
                    Class: {userData.className}
                </Text>
                <Text style={styles.infoText}>
                    Grade: {userData.grade}
                </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon_container: {
        paddingTop: '10%',
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        paddingHorizontal: '15%',
        paddingTop: 30,
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
    },
    studentNu: {
        textAlign: 'center',
        fontSize: 16,
        color: 'black',
    },
    infoText: {
        color: 'black',
        fontSize: 16,
        paddingBottom: 15,
    }


});


export default MyProfilePage;
