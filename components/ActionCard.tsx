import React, { Component } from 'react'
import { Text, StyleSheet, View, Linking } from 'react-native'

export default class ActionCard extends Component {
    render() {
        function openWebSite(webLink: string) {
            Linking.openURL(webLink);
        }
        return (
            <View>
                <Text style={styles.hedingText}> Action Card </Text>
                <View style={[styles.card, styles.cardEleveted]}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hedingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    card: {},
    cardEleveted: {}
})
