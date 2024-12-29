import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

import { useState } from "react";

function GoalInput(props) {
  // Estado para almacenar el texto del objetivo ingresado
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Función para manejar el cambio de texto en el input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  // Función para manejar el evento de agregar objetivo
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  function closeModalHandler() {
    props.onCloseModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* Input para ingresar el texto del objetivo */}
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            {/* Botón para agregar el objetivo */}
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            {/* Botón para cerrar el modal */}
            <Button title="Close Modal" onPress={closeModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
