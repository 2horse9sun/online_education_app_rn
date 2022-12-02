import React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet, View} from 'react-native';

const CourseCard = ({name}) => {

    return (
        <View style={styles.container}>
            <Surface elevation={1} style={styles.card}>

                <View style={styles.cardContainer}>

                    {/* Name of the course */}
                    <View style={styles.titleContainer}>
                        <Text variant="titleMedium">{name}</Text>
                    </View>

                    {/* Other */}
                    <View style={styles.imageContainer} />
                </View>

            </Surface>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        height: 160,
        marginVertical: 10,
        borderRadius: 5,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        height: '100%',
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
});

export default CourseCard;
