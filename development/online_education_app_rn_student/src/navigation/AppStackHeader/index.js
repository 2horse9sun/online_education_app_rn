import React from 'react';
import { View } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';

/**
 * Header of the app stack bar,
 * makes it possible to go to previous page
 *
 */

const AppStackHeader = ({ navigation, back, options }) => {

    const title = options.headerTitle
        ? options.headerTitle
        : options.title !== undefined
            ? options.title
            : 'asas';

    return (
        <Appbar.Header>
            {back && (
                <Appbar.BackAction
                    onPress={navigation.goBack}
                />
            )}
            {back && (
                <Appbar.Content
                    title={title}
                />
            )}
        </Appbar.Header>
    );
};

export default AppStackHeader;