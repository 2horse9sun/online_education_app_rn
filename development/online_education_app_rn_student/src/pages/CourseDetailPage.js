import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, ActivityIndicator, Button } from 'react-native-paper';
import { getCourseDetailByCourseId } from '../dao/CourseDao';



const CourseDetailPage = ({ route, navigation }) => {
    const { id } = route.params;
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let res = await getCourseDetailByCourseId(id);
            setCourse(res.data);
        }

        fetchData();
    }, [id]);

    // Still loading
    if (!course) {
        return <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={true} />
        </View>
    }

    return (
        <ScrollView style={styles.container}>
            <Text variant="headlineMedium">{course.name}</Text>

            <View style={styles.textBodyContainer}>
                <Text variant="bodyMedium">{course.content.introduction}</Text>
            </View>

            {/* Dates */}
            <View style={styles.dateContainer}>
                <View style={styles.date}>
                    <Text variant="labelLarge">Start Date</Text>
                    <Text variant="labelLarge">      {new Date(course.start_date).toUTCString()}</Text>
                </View>
                <View style={styles.date}>
                    <Text variant="labelLarge">End Date</Text>
                    <Text variant="labelLarge">      {new Date(course.end_date).toUTCString()}</Text>
                </View>
            </View>

            {/* Assignments */}
            <Text variant="headlineMedium" style={styles.assignmentTitle}>
                Assignments
            </Text>

            <View style={{ paddingTop: 10, paddingBottom: 15}}>
                <Button mode="outlined" icon="chevron-right"
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    onPress={() => navigation.navigate('CourseAssignmentPage', {courseId: id, isInProgress: true})}
                >
                    In Progress
                </Button>
            </View>

            <View style={{ paddingBottom: 30}}>
                <Button mode="outlined" icon="chevron-right"
                    contentStyle={{ flexDirection: 'row-reverse' }}
                    onPress={() => navigation.navigate('CourseAssignmentPage', {courseId: id, isInProgress: false})}
                >
                    Completed
                </Button>
            </View>

            {/* Update time */}
            <Text variant='labelMedium' style={{ textAlign: 'right', paddingBottom: 20}}>
                Updated on: {new Date(course.update_time).toUTCString()}
            </Text>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textBodyContainer: {
        paddingHorizontal: 10,
        paddingTop: '7%'
    },
    dateContainer: {
        paddingTop: 30,
    },
    date: {
        paddingVertical: 10,
        paddingLeft: 20
    },
    assignmentTitle: {
        textDecorationLine: 'underline',
        paddingVertical: 20,
    },
    

});


export default CourseDetailPage;
