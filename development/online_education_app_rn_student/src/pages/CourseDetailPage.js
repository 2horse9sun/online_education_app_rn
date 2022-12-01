import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, ProgressBar, Colors, Button, DefaultTheme, Snackbar, Text, Appbar  } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';



const CourseDetailPage = () => {

    return (
        <View>
            <Text>TODO! COURSE INFORMATION</Text>
        </View>
    )
}

/* type Props = {};

class CourseDetailPage extends Component<Props> {
    constructor(props) {
        super(props);

    }

    async componentDidMount(){

    }

    renderTopBar(){
        return (
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {this.props.navigation.goBack()}} />
                <Appbar.Content title="Course Detail" subtitle={'Subtitle'} />
            </Appbar.Header>
        );
    }


    render() {
        return (
            <View style={styles.container}>
                {this.renderTopBar()}
            </View>
        );
    }
} */


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default CourseDetailPage;
