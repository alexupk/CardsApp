import React, { Component } from 'react'
import { Text, StyleSheet, View, Linking, Image, TouchableOpacity } from 'react-native'

export default class ActionCard extends Component {
    render() {
        function openWebSite(webLink: string) {
            Linking.openURL(webLink);
        }
        return (
            <View>
                <Text style={styles.hedingText}> Action Card </Text>
                <View style={[styles.card, styles.cardEleveted]}>
                    <View style={styles.hedingContainer}>
                        <Text style={styles.headerText}>
                            What's new in JavaScript 21 - ES12
                        </Text>
                    </View>
                    <Image source={{uri: "https://images.stockcake.com/public/f/f/f/fffb12ac-656e-4b11-aa97-00b176ee1350_large/coding-late-night-stockcake.jpg"}}
                    style={styles.cardImage}
                    />
                    <View style={styles.bodyContainer}>
                        <Text numberOfLines={3}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Perspiciatis deserunt esse minus totam unde assumenda, fugiat tempora beatae, expedita repellat 
                            cum similique dolores debitis. Incidunt, aliquid! Dolore quidem nam quae?
                        </Text>
                    </View>
                    <View style={styles.footerContainer}>
                        <TouchableOpacity onPress={() => openWebSite("https://reactnative.dev/docs/linking")}>
                            <Text style={styles.linkCard}>Read more</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    card: {
        marginHorizontal: 12,
        backgroundColor: "#FFF8DC"
    },
    cardEleveted: {},
    hedingContainer: {
        height:40,
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center"
    },
    headerText: {
        color: "#000000",
        fontSize:16,
        fontWeight:"600"
    },
    cardImage: {
        height: 180
    },
    bodyContainer:{
    },
    footerContainer:{
    },
    linkCard:{
    }
})

// 9 хв.