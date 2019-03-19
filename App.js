/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type Props = {};
export default function App() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>{`${count}`}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text style={styles.welcome}>{'+'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text style={styles.welcome}>{'-'}</Text>
            </TouchableOpacity>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
