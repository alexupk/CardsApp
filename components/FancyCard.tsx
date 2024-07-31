import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.hedingText}>Trending places</Text>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
            source={{uri:"https://st4.depositphotos.com/14827960/20622/i/600/depositphotos_206223610-stock-photo-iceland-may-2018-view-towards.jpg"}}
            style={styles.cardImage}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Iceland</Text>
                <Text style={styles.cardLabel}>Iceland Label</Text>
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
    card:{},
    cardElevated:{},
    cardImage:{
        height:200
    },
    cardBody:{},
    cardTitle:{},
    cardLabel:{}
})
