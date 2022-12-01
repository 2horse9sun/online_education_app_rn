import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, ProgressBar, Colors, Button, DefaultTheme, Snackbar, Text, Appbar  } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';



type Props = {};

class MyCoursePage extends Component<Props> {
    constructor(props) {
        super(props);

    }

    async componentDidMount(){

    }

    renderTopBar(){
        return (
            <Appbar.Header>
                <Appbar.Content title="My Courses" subtitle={'Subtitle'} />
                <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderTopBar()}
                <Button icon="camera" mode="contained" 
                    onPress={() => this.props.navigation.push('CourseDetailPage')}
                >
                    Test Navigation
                </Button>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default MyCoursePage;
