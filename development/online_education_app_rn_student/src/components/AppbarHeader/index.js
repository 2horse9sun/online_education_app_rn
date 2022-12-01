import React from 'react';
import { Appbar } from 'react-native-paper';

const AppbarHeader = ({title, subtitle}) => {

    return (
        <Appbar.Header>
            <Appbar.Content title={title} subtitle={subtitle} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
    );
};

export default AppbarHeader;
