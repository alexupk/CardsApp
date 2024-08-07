import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FlatCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.hedingText}> Flat Cards </Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
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
  container :{
    flex:1,
    flexDirection:"row",
    padding:8
  },
  card:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:100,
    height:100,
    borderRadius:4,
    margin:8
  },
  cardOne:{
    backgroundColor: "#FF0000"
  },
  cardTwo:{
    backgroundColor: "#008000"
  },
  cardThree:{
    backgroundColor: "#0000FF"
  }
})

