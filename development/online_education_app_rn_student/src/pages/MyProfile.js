import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import AppbarHeader from '../components/AppbarHeader';



const MyProfilePage = () => {

    return (
        <View style={styles.container}>
            <AppbarHeader title="Profile" />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default MyProfilePage;
