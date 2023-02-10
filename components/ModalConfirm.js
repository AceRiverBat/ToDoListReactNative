import React from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";

const ModalConfirm = ({ modalVisible, onConfirm, onCancel }) => {
  
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centerView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Voulez-vous supprimer cette tâche ?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.deleteButton} onPress={onConfirm}>
              <Text style={styles.deleteButtonText}>oui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Non</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 12,
    margin:5,
    borderRadius: 5
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  cancelButton: {
    backgroundColor: "grey",
    padding: 12,
    margin:5,
    borderRadius: 5
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ModalConfirm