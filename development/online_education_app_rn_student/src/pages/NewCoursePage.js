import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import {
    en,
    registerTranslation,
} from 'react-native-paper-dates'
import { addCourse } from '../dao/CourseDao';

const NewCoursePage = () => {
    // Data
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [range, setRange] = useState({ startDate: undefined, endDate: undefined });


    const [open, setOpen] = React.useState(false);

    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }) => {
            setOpen(false);
            setRange({ startDate, endDate });
        },
        [setOpen, setRange]
    );

    const sendForm = async () => {
        console.log(name, content, range);
    }

    registerTranslation('en', en);

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <TextInput
                    label="Course name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>

            <View style={styles.input}>
                <TextInput
                    label="Content"
                    multiline
                    value={content}
                    onChangeText={text => setContent(text)}
                />
            </View>

            <View style={styles.input}>
                <Button onPress={() => setOpen(true)} mode="outlined">
                    Pick starting and end date!
                </Button>
                <DatePickerModal
                    locale="en"
                    mode="range"
                    visible={open}
                    onDismiss={onDismiss}
                    startDate={range.startDate}
                    endDate={range.endDate}
                    onConfirm={onConfirm}
                />
            </View>

            <View style={styles.input}>
                <Button
                    onPress={sendForm}
                    mode="contained"
                >
                    Add new course
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        paddingVertical: "5%",
    }
});

export default NewCoursePage;
