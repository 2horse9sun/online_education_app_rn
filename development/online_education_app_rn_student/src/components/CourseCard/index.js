import React from 'react';
import { Surface, Text, TouchableRipple } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const CourseCard = (props) => {
    
    return (
        <View style={styles.container}>
            <Surface
                elevation={1}
                style={styles.card}
            >
                <TouchableRipple
                    onPress={() => props.navigation.push('CourseDetailPage', {
                        id: props.id
                    })}
                >

                    <View style={styles.cardContainer}>

                        {/* Name of the course */}
                        <View style={styles.titleContainer}>
                            <Text variant="titleMedium">{props.name}</Text>
                        </View>


                        {/* Other */}
                        <View style={styles.imageContainer} />
                    </View>
                </TouchableRipple>
            </Surface>

        </View >
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
