import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Searchbar, Button, Card } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';
import AppbarHeader from '../components/AppbarHeader';
import { getAllCourseListByStudentId } from '../api/CourseAPI';
import CourseCard from '../components/CourseCard';



const MyCoursePage = ({ navigation }) => {

    const [courses, setCourses] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        async function fetchData() {
            let user_info = await AsyncStorage.getItem("user_info");
            user_info = JSON.parse(user_info);

            const res = await getAllCourseListByStudentId(user_info.student_id);

            setCourses(res.data);
        }

        fetchData();
    }, []);

    const onChangeSearch = query => setSearchQuery(query.toLowerCase());

    return (
        <View style={styles.container}>
            <AppbarHeader title="My Courses" />

            {/* Search bar */}
            <View style={{ paddingBottom: 20}}>
                <Searchbar
                    placeholder="Search here..."
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>


            {/* Title */}
            <View style={ styles.headerContainer}>
                <Text style={styles.titleText}>
                    Courses
                </Text>
                <Button 
                    icon="plus"
                    mode="text"
                    onPress={() => navigation.push('NewCoursePage')}
                >
                    Add New Course
                </Button>
            </View>

            {/* Course cards */}
            <ScrollView>
                {
                    courses && courses.map( props => {
                        if (props.name.toLowerCase().includes(searchQuery)){
                            return <CourseCard key={props.id} {...props} navigation={navigation}/>
                        }
                        return <View/>
                    })
                }
            </ScrollView>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        color: 'black',
        fontSize: 24,
        letterSpacing: 0.4,
        fontWeight: '500'
    },
    headerContainer: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});


export default MyCoursePage;
