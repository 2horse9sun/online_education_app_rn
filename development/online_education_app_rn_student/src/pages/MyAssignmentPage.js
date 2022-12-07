import React, { useState, useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, ProgressBar, Colors, Button, DefaultTheme, Snackbar, Text, Appbar  } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';
import AppbarHeader from '../components/AppbarHeader';
import { getAllAssignmentListByStudentId } from '../api/AssignmentAPI';

// TODO! CHANGE ASSIGNMENT PAGE TO TWO DIFFERENT PAGES
// PROGRESS PAGE AND DONE PAGE!

const MyAssignmentPage = () => {

    const [courses, setCourses] = useState([]);

    useEffect( () => {

        async function fetchData() {
            let user_info = await AsyncStorage.getItem("user_info");
            user_info = JSON.parse(user_info);

            const res = await getAllAssignmentListByStudentId(user_info.student_id);
            /* setUndoneCourses(res.data.filter(course => course.assignment_submission_time != null));
            setCourses(res.data); */
            const groups = res.data.reduce( (r, a) => {
                r[a.course_name] = r[a.course_name] || [];
                r[a.course_name].push(a);
                return r;
            }, Object.create(null));
            
            setCourses(groups);
        }
        fetchData();
    }, []);

    //console.log(courses);
    return (
        <View style={styles.container}>
            <AppbarHeader title="My Assignments" />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default MyAssignmentPage;
