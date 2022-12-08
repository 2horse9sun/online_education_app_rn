import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Searchbar, Card, Title, Paragraph, ProgressBar, Colors, Button, DefaultTheme, Snackbar, Text, IconButton } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';
import AppbarHeader from '../components/AppbarHeader';
import { getAllAssignmentListByStudentId } from '../api/AssignmentAPI';

// TODO! CHANGE ASSIGNMENT PAGE TO TWO DIFFERENT PAGES
// PROGRESS PAGE AND DONE PAGE!

const MyAssignmentPage = () => {

    const [assignments, setAssignments] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {

        async function fetchData() {
            let user_info = await AsyncStorage.getItem("user_info");
            user_info = JSON.parse(user_info);

            const res = await getAllAssignmentListByStudentId(user_info.student_id);
            /* setUndoneCourses(res.data.filter(course => course.assignment_submission_time != null));
            setCourses(res.data); */
            setAssignments(res.data);
        }
        fetchData();
    }, []);

    const onChangeSearch = query => setSearchQuery(query.toLowerCase());

    return (
        <View style={styles.container}>
            <AppbarHeader title="All Assignments" />
            {/* Search bar */}
            <View style={{ paddingBottom: 20 }}>
                <Searchbar
                    placeholder="Search here..."
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>
            <ScrollView>
                <View style={styles.cardContainer}>
                    {/* Title */}
                    <Text variant="headlineMedium" style={styles.assignmentTitle}>
                        In Progress
                    </Text>

                    {/* Assignment cards */}
                    <ScrollView>
                        {
                            assignments && assignments.slice(0, 3).map(props => {
                                if (props.title.toLowerCase().includes(searchQuery)) {
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
                                            <ProgressBar progress={Math.random()} style={styles.progressBar} />
                                        </Card>

                                    )
                                }
                                return <View />
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.cardContainer}>
                    {/* Title */}
                    <Text variant="headlineMedium" style={styles.assignmentTitle}>
                        Completed
                    </Text>

                    {/* Assignment cards */}
                    <ScrollView>
                        {
                            assignments && assignments.slice(3, 5).map(props => {
                                if (props.title.toLowerCase().includes(searchQuery)) {
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
                                        </Card>

                                    )
                                }
                                return <View />
                            })
                        }
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        paddingHorizontal: 20,
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


export default MyAssignmentPage;
