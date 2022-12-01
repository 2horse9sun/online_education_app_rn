import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';



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
