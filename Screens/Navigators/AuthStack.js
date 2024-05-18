import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginPage from '../AuthScreen/LoginPage'


const AuthStack = (Stack) => {
    return (
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
    )
}

export default AuthStack

const styles = StyleSheet.create({})