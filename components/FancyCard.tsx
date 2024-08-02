import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.hedingText}>Trending places</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{ uri: "https://st4.depositphotos.com/14827960/20622/i/600/depositphotos_206223610-stock-photo-iceland-may-2018-view-towards.jpg" }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Iceland</Text>
            <Text style={styles.cardLabel}>Iceland Label</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              illum doloremque sapiente recusandae deleniti quisquam, corrupti pariatur soluta nam quasi cupiditate quod accusamus,
              eius similique fugiat. Excepturi harum beatae expedita.
            </Text>
            <Text style={styles.cardFooter}>Iceland Footer</Text>
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
    paddingHorizontal: 8
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: "#D3D3D3"
  },
  cardImage: {
    height: 180
    ,
    marginBottom: 8
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6
  },
  cardDescription: {
    fontSize: 12,
    marginBottom: 12
  },
  cardFooter: {}
})
