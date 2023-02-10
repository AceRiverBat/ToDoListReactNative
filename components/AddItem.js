import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import Ripple from 'react-native-material-ripple';

const AddItem = ({ setTodos }) => {

    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.length > 0) {
            setTodos(prevTodos => [
                ...prevTodos,
                { text: text, key: Math.random().toString() }
            ]);
            setText("");
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task !"
                onChangeText={text => setText(text)}
                value={text}
            />
            <Ripple style={styles.addButton} onPress={addTodo}>
                <Text style={styles.addButtonText}>Add</Text>
            </Ripple>
        </View>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        paddingTop: 10
    },
    input: {
        padding: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
        fontSize: 15,
        backgroundColor:"white"
    },
    addButton: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        justifyContent:"center"
    },
    addButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});
export default AddItem;