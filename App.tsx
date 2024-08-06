import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevetedCards from './components/ElevetedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatCards/>
          <ElevetedCards/>
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default App
