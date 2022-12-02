import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppbarHeader from '../components/AppbarHeader';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * Profile page, showing all the necessary user information,
 * e.g., user numbers, grade, school years etc.
 * 
 */

// Mock data that is used in the application
const mockUser = {
    name: 'Alice',
    studentNumber: 3576946,
    year: {
        starting: 2019,
        ending: 2023,
    },
    class: '12a',
    grade: 12,
};


const MyProfilePage = () => {

    let gradeEnding;
    switch (mockUser.grade) {
        case 1:
            gradeEnding = 'st';
            break;
        case 2:
            gradeEnding = 'nd';
            break;
        case 3:
            gradeEnding = 'rd';
            break;
        default: gradeEnding = 'th';
    }

    return (
        <View style={styles.container}>
            <AppbarHeader title="Profile" />
            {/** Icon */}
            <View style={styles.icon_container}>
                <Icon name="user-circle" size={150} style={styles.icon} />
            </View>

            {/* Student number  */}
            <Text style={styles.titleText}>
                {mockUser.name}
            </Text>
            <Text style={styles.studentNu}>
                Student No. {mockUser.studentNumber}
            </Text>

            {/* Class information  */}
            <View style={ styles.infoContainer}>
                <Text style={styles.infoText}>
                    Year: {mockUser.year.starting} - {mockUser.year.ending}
                </Text >
                <Text style={styles.infoText}>
                    Class: {mockUser.class}
                </Text>
                <Text style={styles.infoText}>
                    Grade: {mockUser.grade}{gradeEnding} grade
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
