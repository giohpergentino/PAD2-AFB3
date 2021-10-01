import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
    // Falta criar: Visualize os detalhes da tarefa
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 1,
    borderRadius: 10,
  }
});