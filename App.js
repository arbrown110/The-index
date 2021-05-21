
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button,  TextInput, ScrollView } from 'react-native';
import Todo from './Todo';


const  App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>

      <Text style={styles.textTitle}>
      Things I keep forgetting to do !!!
      </Text>
      </View>
      <ScrollView style={styles.listTodo}>
      {todos.map(todo => (
        <Todo title={todo} />
      ))}
      </ScrollView>
      {/* <Todo title='clean room'/>
      <Todo title='pay electric bill'/>
      <Todo title='pay cell phone'/>
      <Todo title='NO Hotel'/>
      <Todo title=' See if you can refund plan ticket'/> */}

      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={text => setInput(text) }
      />
      <Button onPress={addTodo} title='Add Task' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    // paddingTop: StatusBar.currentHeight,
  },
  todoInput: {
    margin: 50,
    height: 70,
    borderColor: 'black',
    borderWidth: 3,

  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listTodo: {
   margin: 20,
   padding: 20,
   flexDirection: 'columns',
    // alignItems: 'baseline',
  //  justifyContent: 'center',
   borderWidth: 2,
    
  },

});

export default App;


/// align item can only be a container . Will need to change code to make todo list .