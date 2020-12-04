import React from 'react';

import { View,StyleSheet,Text} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './routes/Navigation';
import store from './redux/store';
export default  function App() {
  return (
    <Provider store={store}>
      <Navigation />
      
    </Provider>
  );


}




/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working  app!</Text>
      <StatusBar style="auto" />
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

*/
