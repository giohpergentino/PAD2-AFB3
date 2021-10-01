import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>App ToDo-List:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: '#DA70D6',
  },
  title: {
    textAlign: 'center',
    color: '#C0C0C0',
    fontSize: 20,
    fontWeight: 'bold',
  }
});