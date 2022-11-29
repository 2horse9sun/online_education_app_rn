import React, {Component} from 'react';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://online-education-app.s3.eu-west-1.amazonaws.com/image/splash_background.png" };

type Props = {};

class SplashPage extends Component<Props> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.navigate("BasePage");
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        
        return (
            <View style={styles.container}>
                <ImageBackground source={image} resizeMode="contain" style={styles.image}>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
  });


export default SplashPage;
