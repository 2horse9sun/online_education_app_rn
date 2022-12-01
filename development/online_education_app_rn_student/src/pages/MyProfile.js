import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card, Title, Paragraph, ProgressBar, Colors, Button, DefaultTheme, Snackbar, Text, Appbar } from 'react-native-paper';
import { truncate } from '../utils/StringUtil';
import Entypo from 'react-native-vector-icons/Entypo';
import { formatDate } from '../utils/DateUtil';


const MyProfilePage = () => {

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Profile" subtitle={'Subtitle'} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default MyProfilePage;
