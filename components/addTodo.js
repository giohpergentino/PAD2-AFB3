import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='Teste'
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='black' onPress={() => submitHandler(text)}  title='ADD TESTE'/> 

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 12,
    paddingHorizontal: 10, 
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#8B008B',
  },
});