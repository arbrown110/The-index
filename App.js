
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
    // display: "flex";
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'


    // paddingTop: StatusBar.currentHeight,
  },
  todoInput: {
    margin: 10,
    height: 100,
    width: 200,
    borderColor: 'black',
    borderWidth: 3,
    fontSize: 16

  },
  textTitle: {
    fontSize: 40,
    fontWeight: "bold",
    paddingVertical: 6,
    borderWidth: 8,
    borderColor: "#20230a",
    borderRadius: 4,
    backgroundColor: "#61dafb",
    color: "#20230a",
    // textAlign: "center",



  },
  listTodo: {
   margin: 70,
   padding: 200,
   flexDirection: 'columns',
    // alignItems: 'baseline',
  // justifyContent: 'space-around',
   borderWidth: 2,
   fontStyle: 'italic',
   fontWeight: 'bold',
   fontSize: 200
    
  },

});

export default App;


/// align item can only be a container . Will need to change code to make todo list .