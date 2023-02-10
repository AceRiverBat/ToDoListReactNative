import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Items from "./components/Items";
import AddItem from "./components/AddItem";

const TodoList = () => {

  const [todos, setTodos] = useState([
    { text: "perdre 5kg", key: "1" },
    { text: "Faire les courses", key: "2" },
    { text: "sheeesh", key: "3" }
  ]);

  return (
    <View style={styles.container}>
      <Items todos={todos} setTodos={setTodos} />
      <AddItem todos={todos} setTodos={setTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },

});

export default TodoList;
