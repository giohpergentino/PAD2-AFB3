import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    /*{ text: 'Fazer café', key: '1' },
    { text: 'Fazer um aplicativo', key: '2' },
    { text: 'jogar ', key: '3' }*/
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    setTodos ((prevTodos) =>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1b1b1',
  },
  content: {
    padding: 45,
  },
  list: {
    marginTop: 25,
  },
});