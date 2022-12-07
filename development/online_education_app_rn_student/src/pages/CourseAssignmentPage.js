import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, Searchbar, Button, Card, ProgressBar, Title, Paragraph, IconButton } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';
import AppbarHeader from '../components/AppbarHeader';
import {getAllAssignmentListByStudentIdAndCourseId} from '../api/AssignmentAPI';



const CourseAssignmentPage = ({ route, navigation }) => {
    const { courseId, isInProgress } = route.params;
    const [assignments, setAssignments] = useState();

    useEffect(() => {

        async function fetchCourseAssignmentData() {
            let user_info = await AsyncStorage.getItem("user_info");
            user_info = JSON.parse(user_info);

            const res = await getAllAssignmentListByStudentIdAndCourseId(user_info.student_id, courseId);

            setAssignments(res.data);
        }

        fetchCourseAssignmentData();
    }, []);



    return (
        <View style={styles.container}>
            {/* Title */}
            <Text variant="headlineMedium" style={styles.assignmentTitle}>
                {isInProgress ? 'In Progress' : 'Completed'}
            </Text>

            {/* Assignment cards */}
            <ScrollView>
                {
                    assignments && assignments.map( props => {
                        return (
                            <Card key={props.id} style={styles.assignmentCard}>
                                <Card.Title
                                    title={props.title}
                                    titleNumberOfLines={2}
                                    // subtitle="Card Subtitle"
                                    // left={(props) => <Avatar.Icon {...props} icon="folder" />}
                                    right={(props) => <IconButton
                                                            {...props}
                                                            icon="arrow-right"
                                                            size={20}
                                                        />}
                                />
                                {isInProgress ? <ProgressBar progress={Math.random()} style={styles.progressBar} /> : null}
                            </Card>
                            
                        )
                    })
                }
            </ScrollView>

        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    assignmentTitle: {
        textDecorationLine: 'underline',
        paddingVertical: 20,
    },
    assignmentCard: {
        paddingHorizontal: 10,
        marginVertical: 5
    },
    progressBar: {
        marginBottom: 10
    }

});


export default CourseAssignmentPage;
