import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'

export default class ContactList extends Component {



    render() {
        const contacts = [
            {
                uid: 1,
                name: 'Ivan Petrov',
                status: 'active',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 2,
                name: 'Olena Ivanova',
                status: 'inactive',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 3,
                name: 'Petro Shevchenko',
                status: 'pending',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 4,
                name: 'Maria Bondarenko',
                status: 'active',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 5,
                name: 'Andriy Tkachuk',
                status: 'inactive',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 6,
                name: 'Oksana Hryshchenko',
                status: 'pending',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 7,
                name: 'Mykola Kovalchuk',
                status: 'active',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 8,
                name: 'Nataliya Lysenko',
                status: 'inactive',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 9,
                name: 'Viktor Symonenko',
                status: 'pending',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },
            {
                uid: 10,
                name: 'Larysa Kravchuk',
                status: 'active',
                imageUrl: 'https://images.pexels.com/photos/17410093/pexels-photo-17410093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
        ];
        return (
            <View>
                <Text style={styles.hedingText}> Contact List </Text>
                <ScrollView
                    style={styles.container}
                    scrollEnabled={false}>
                    {contacts.map(({ uid, name, status, imageUrl }) => (
                        <View key={uid} style={styles.userCard}>
                            <Image
                                source={{ uri: imageUrl }}
                                style={styles.userImage}
                            />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
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
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        backgroundColor: "#c0f38a",
        padding: 8,
        borderRadius: 14
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
        color: "black"
    },
    userStatus: {
        fontSize: 12
    }
})

