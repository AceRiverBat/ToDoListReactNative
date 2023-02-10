import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoList from './ToDoList';


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <TodoList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 16
  }
});
