import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native';
import TodoList from './ToDoList';

const img= require('./assets/images/kermit-dance.gif');


export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.image}>
      <Text style={styles.heading}>TODO LIST</Text>
      <TodoList/>
      <StatusBar style="auto" />
      </ImageBackground>
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
  },
  image: {
    flex: 1,
    padding:100,
    justifyContent: 'center',
  }
});
