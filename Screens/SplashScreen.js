import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Color from './Styles/Color'
import { responsiveBorderRadius } from './Styles/Dimesions'

const { width, height } = Dimensions.get('window')
const SplashScreen = () => {
    return (
        <LinearGradient colors={[Color.loginLinear1, Color.loginLinear2, Color.loginLinear3]} style={styles.container}>
            <View style={styles.imageBack}>
                <Image source={require('../assets/images/logo.png')} style={styles.image} />
            </View>
        </LinearGradient>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBack: {
        backgroundColor: Color.defaultBackground,
        borderRadius: responsiveBorderRadius(15),
        elevation: 8
    },
    image: {
        width: width * 0.6,
        height: height * 0.4
    },
})