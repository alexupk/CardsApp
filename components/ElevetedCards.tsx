import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ElevetedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.hedingText}> Eleveted Card </Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardEleveted]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Text>me</Text>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Text>to</Text>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Text>scroll</Text>
          </View>
          <View style={[styles.card, styles.cardEleveted]}>
            <Text>more...</Text>
          </View>
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
  container:{
    padding:8
  },
  card:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    width:100,
    height:100,
    borderRadius:4,
    margin:8    
  },
  cardEleveted:{
    backgroundColor:"#FF8C00"
  }
})