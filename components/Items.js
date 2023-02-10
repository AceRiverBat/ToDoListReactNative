import React, {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ModalConfirm from "./ModalConfirm";

const Items = ({ todos, setTodos}) => {

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = (key) => {
    setTodos(prevTodos => {
      return (
        prevTodos.filter(todo => todo.key != key));
    });
    hideModal();
  };

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.text}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={showModal}>
            <FontAwesome
              name="trash"
              size={18}
              color="#000"
              style={styles.deleteText}
            />
          </TouchableOpacity>
          <ModalConfirm
        modalVisible={modalVisible}
        onConfirm={() => handleConfirm(item.key)}
        onCancel={hideModal}
      />
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  itemSelected: {
    fontStyle: "italic",
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  deleteButton: {
    borderRadius: 5,
    marginLeft: 5
  },
  deleteText: {
    color: "black",
    fontWeight: "bold"
  },
  validateButton: {
    borderRadius: 5,
    marginRight: 10,
    padding:5,
    backgroundColor:"green"
  },
  validateText: {
    color: "white"
  },

});

export default Items