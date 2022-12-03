import { text } from 'express';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, HelperText, Divider } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import {
    enGB,
    registerTranslation,
} from 'react-native-paper-dates'
import { addCourse } from '../dao/CourseDao';

const NewCoursePage = ({ navigation }) => {
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

    // Course name error
    const noName = () => {
        return name.trim().length === 0;
    }

    // No starting and ending date specified
    const noDate = () => {
        return range.startDate === undefined || range.endDate === undefined
    };

    // Send the new course to the db
    const sendForm = async () => {
        // todo send the actual request
        console.log(name, content, range);
        navigation.pop();
    };

    registerTranslation('en-GB', enGB);

    return (
        <View style={styles.container}>

            {/* Title of the page */}
            <View style={styles.titleContainer}>
                <Text variant="headlineMedium">Add course</Text>
            </View>

            <Divider style={{ marginBottom: 20}}/>

            <View style={styles.input}>
                <TextInput
                    label="Course name"
                    value={name}
                    onChangeText={text => setName(text)}
                    error={noName()}
                />
                {
                    noName() ? (
                        <HelperText type="error">
                            Course name can't be empty
                        </HelperText>
                    ) : (
                        <HelperText>
                            *Required
                        </HelperText>
                    )
                }

            </View>

            <View style={styles.input}>
                <TextInput
                    label="Content"
                    multiline
                    value={content}
                    onChangeText={text => setContent(text)}
                />
                <HelperText>
                    Content of the course
                </HelperText>
            </View>

            <View style={styles.input}>
                <Button onPress={() => setOpen(true)} mode="outlined">
                    Pick starting and end date!
                </Button>
                {
                    noDate() ? (
                        <HelperText type="error">
                            Starting and ending date required
                        </HelperText>
                    ) : (
                        <HelperText>
                            Define start and end date for the course
                        </HelperText>
                    )
                }
                <DatePickerModal
                    locale="en-GB"
                    mode="range"
                    visible={open}
                    onDismiss={onDismiss}
                    startDate={range.startDate}
                    endDate={range.endDate}
                    onConfirm={onConfirm}
                />
            </View>

            <View style={styles.input}>
                {noDate() && noName() ? (
                    <Button disabled>
                        Disabled
                    </Button>
                ): (
                    <Button
                    onPress = { sendForm }
                    mode = "contained"
                    disabled = { noDate() || noName()}
                >
                Add new course
                    </Button>
                )}
        </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        paddingVertical: "6%",
    },
    titleContainer: {
        paddingTop: 30,
        paddingBottom: 20,
    }
});

export default NewCoursePage;
