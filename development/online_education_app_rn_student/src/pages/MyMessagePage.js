import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, ProgressBar, Colors, Button, DefaultTheme, Snackbar, Text, Appbar, List, IconButton  } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';
import DocumentPicker from 'react-native-document-picker';
import { addCourse, getCourseListByStudentId, getAllCourseListByStudentId, getCourseDetailByCourseId } from '../api/CourseAPI';
import { getAllAssignmentListByStudentIdAndCourseId, getAssignmentDetailByStudentIdAndAssignmentId, getAllRecentAssignmentListByStudentId, getAllAssignmentListByStudentId, addAssignment  } from '../api/AssignmentAPI';
import { getAllLessonListByCourseId, getLessonDetailByLessonId, addLesson } from '../api/LessonAPI';


type Props = {};

class MyMessagePage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    async componentDidMount(){

    }

    async addFile(){
        try {
            const results = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.allFiles],
              copyTo: "cachesDirectory"
            });
            console.log(results);
            this.setState({
                files: results
            })
          } catch (e) {
            console.log(e);
          }
    }

    async deleteFile(index){
        let updatedFiles = this.state.files;
        updatedFiles.splice(index, 1);
        this.setState({
            files: updatedFiles
        })
    }

    async testGetCourseListByStudentId(){
        let user_info = await AsyncStorage.getItem("user_info");
        user_info = JSON.parse(user_info);

        const student_id = user_info.student_id;
        const page_size = 5;
        const page_number = 0;
        const res = await getCourseListByStudentId(student_id, page_size, page_number);
        console.log(res);
    }

    async testGetAllCourseListByStudentId(){
        let user_info = await AsyncStorage.getItem("user_info");
        user_info = JSON.parse(user_info);

        const student_id = user_info.student_id;
        const res = await getAllCourseListByStudentId(student_id);
        console.log(res);
    }

    async testGetCourseDetailByCourseId(){
        const course_id = 1;
        const res = await getCourseDetailByCourseId(course_id);
        console.log(res);
    }

    async testAddCourse(){
        const courseData = {
            name: "Introduction to Machine Learning",
            content: {
                introduction: `Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, agriculture, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks. A subset of machine learning is closely related to computational statistics, which focuses on making predictions using computers, but not all machine learning is statistical learning. The study of mathematical optimization delivers methods, theory and application domains to the field of machine learning. Data mining is a related field of study, focusing on exploratory data analysis through unsupervised learning. Some implementations of machine learning use data and neural networks in a way that mimics the working of a biological brain. In its application across business problems, machine learning is also referred to as predictive analytics.`
            },
            start_date: "2022-09-02",
            end_date: "2022-12-05"
        }

        let thumbnailFile = this.state.files[0];
        let res = await addCourse(courseData.name, courseData.content, courseData.start_date, courseData.end_date, thumbnailFile);
        console.log(res);

    }

    async testGetAllAssignmentListByStudentIdAndCourseId(){
        let user_info = await AsyncStorage.getItem("user_info");
        user_info = JSON.parse(user_info);

        const student_id = user_info.student_id;
        const course_id = 1;
        const res = await getAllAssignmentListByStudentIdAndCourseId(student_id, course_id);
        console.log(res);
    }

    async testGetAssignmentDetailByStudentIdAndAssignmentId(){
        let user_info = await AsyncStorage.getItem("user_info");
        user_info = JSON.parse(user_info);

        const student_id = user_info.student_id;
        const assignment_id = 1;
        const res = await getAssignmentDetailByStudentIdAndAssignmentId(student_id, assignment_id);
        console.log(res);
    }

    async testGetAllRecentAssignmentListByStudentId(){
        let user_info = await AsyncStorage.getItem("user_info");
        user_info = JSON.parse(user_info);

        const student_id = user_info.student_id;
        const res = await getAllRecentAssignmentListByStudentId(student_id);
        console.log(res);
    }

    async testGetAllAssignmentListByStudentId(){
        let user_info = await AsyncStorage.getItem("user_info");
        user_info = JSON.parse(user_info);

        const student_id = user_info.student_id;
        const res = await getAllAssignmentListByStudentId(student_id);
        console.log(res);
    }

    async testAddAssignment(){
        const assignmentData = {
            title: "Problem Set 5: Memory Consistency and Cache Coherence",
            content: {
                description: `For this problem we will be using the following sequences of instructions. These are small programs, each executed on a different processor, each with its own cache and register set. In the following R is a register and X is a memory location. Each instruction has been named (e.g., B3) to make it easy to write answers.`
            },
            course_id: 1,
            owner_user_id: 3,
            due_time: new Date(Date.now()).toISOString(),
            release_time: new Date(Date.now()).toISOString()
        }

        let assignmentFiles = this.state.files;
        let res = await addAssignment(assignmentData.title, assignmentData.content, assignmentData.course_id, assignmentData.owner_user_id, assignmentData.due_time, assignmentData.release_time, assignmentFiles);
        console.log(res);
    }

    async testGetAllLessonListByCourseId(){
        const course_id = 1;
        const res = await getAllLessonListByCourseId(course_id);
        console.log(res);
    }

    async testGetLessonDetailByLessonId(){
        const lesson_id = 1;
        const res = await getLessonDetailByLessonId(lesson_id);
        console.log(res);
    }

    async testAddLesson(){
        const lessonData = {
            name: "Lecture 4 Pipelining Part II",
            content: {
                introduction: `Lecture 4 Pipelining Part II`
            },
            course_id: 1,
            teacher_id: 3,
            release_time: new Date(Date.now()).toISOString()
        }

        let lessonFiles = this.state.files;
        let res = await addLesson(lessonData.name, lessonData.content, lessonData.course_id, lessonData.teacher_id, lessonData.release_time, lessonFiles);
        console.log(res);
    }




    renderTopBar(){
        return (
            <Appbar.Header>
                <Appbar.Content title="My Messages" subtitle={'Subtitle'} />
                <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
        );
    }

    renderFileList(fileItem){
        return (
            <List.Item
                title={fileItem.item.name}
                // description="Item description"
                left={props => <List.Icon {...props} icon="file" />}
                right={props => <IconButton
                    icon="window-close"
                    size={20}
                    mode="contained"
                    onPress={() => this.deleteFile(fileItem.index)}
                  />}
            />
        )
    }

    renderListHeader(){
        return (
            <View style={styles.container}>
                <Appbar.Header>
                    <Appbar.Content title="API test"/>
                </Appbar.Header>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="plus" mode="contained" onPress={() => this.addFile()}>
                        Add File
                    </Button>
                </View>
            </View>
            
        )
    }

    renderListFooter(){
        return (
            <View style={styles.container}>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetCourseListByStudentId()}>
                        getCourseListByStudentId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetAllCourseListByStudentId()}>
                        getAllCourseListByStudentId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetCourseDetailByCourseId()}>
                        getCourseDetailByCourseId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testAddCourse()}>
                        addCourse
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetAllAssignmentListByStudentIdAndCourseId()}>
                    getAllAssignmentListByStudentIdAndCourseId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetAssignmentDetailByStudentIdAndAssignmentId()}>
                    getAssignmentDetailByStudentIdAndAssignmentId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetAllRecentAssignmentListByStudentId()}>
                    getAllRecentAssignmentListByStudentId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetAllAssignmentListByStudentId()}>
                    getAllAssignmentListByStudentId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testAddAssignment()}>
                    addAssignment
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetAllLessonListByCourseId()}>
                    getAllLessonListByCourseId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testGetLessonDetailByLessonId()}>
                    getLessonDetailByLessonId
                    </Button>
                </View>
                <View style={{width: "80%", alignSelf: "center", marginVertical: 10, marginHorizontal: 20}}>
                    <Button icon="upload" mode="contained" onPress={() => this.testAddLesson()}>
                    addLesson
                    </Button>
                </View>
            </View>
            
        )
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderTopBar()}
                    
                    <FlatList
                        data={this.state.files}
                        renderItem={(fileItem) => this.renderFileList(fileItem)}
                        ListHeaderComponent={() => this.renderListHeader()}
                        ListFooterComponent={() => this.renderListFooter()}
                    />
                    
                

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default MyMessagePage;
