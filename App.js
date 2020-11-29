import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/search.js'

export default function App() {
  return (
    <View style={{ marginTop: 50 }}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <Text style={{textAlign:'center'}}>Bienvenue ! Commencez la recherche de l'élu.e.s de votre coeur !</Text>
      <StatusBar style="auto" />
      <Search/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
