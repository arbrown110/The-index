
import React, { useState } from 'react';
// import { Button } from 'react-native-elements';
import { StyleSheet, Text, SafeAreaView, View, StatusBar,  Button, TextInput, ScrollView } from 'react-native';
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
      <Button onPress={addTodo} title='Add Task' type="clear" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'


    // paddingTop: StatusBar.currentHeight,
  },
  todoInput: {
    margin: 10,
    height: 50,
    borderColor: 'black',
    borderWidth: 3,

  },
  textTitle: {
    fontSize: 60,
    fontWeight: "bold",
  },
  listTodo: {
   margin: 100,
   padding: 300,
   flexDirection: 'columns',
    // alignItems: 'baseline',
  // justifyContent: 'space-around',
   borderWidth: 2,
    
  },

});

export default App;


/// align item can only be a container . Will need to change code to make todo list .