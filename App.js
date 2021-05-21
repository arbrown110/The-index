
import React from 'react';
import { StyleSheet, Text,  SafeAreaView, ScrollView, StatusBar } from 'react-native';

const  App= () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <Text style={styles.textTitle}>
      I'm just typing alot of things to full up this piece while I type . this is making no sense but whatever.
      </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'green',
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default App;