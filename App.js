import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blueView} />
      <View style={styles.orangeView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueView: {
    flex:1,
    backgroundColor:"blue"
  },
  orangeView: {
    flex:1,
    backgroundColor:"orange"
  }
});
