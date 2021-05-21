
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, StatusBar, Button, TextInput } from 'react-native';
import Todo from './Todo';


const  App = () => {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>

      <Text style={styles.textTitle}>
      I'm just typing alot of things to full up this piece while I type . this is making no sense but whatever.
      </Text>
      </View>
      <Todo title='clean room'/>
      <Todo title='pay electric bill'/>
      <Todo title='pay cell phone'/>
      <Todo title='NO Hotel'/>
      <Todo title=' See if you can refund plan ticket'/>

      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={text => setInput(text) }
      />
      <Button title='Add Task' onPress={}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  todoInput: {
    margin: 20,
    height: 50,
    borderColor: 'green',
    borderWidth: 2,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },


});

export default App;