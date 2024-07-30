import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import FlatCards from './components/FlatCards'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards/>
          <Text> textInComponent </Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App
