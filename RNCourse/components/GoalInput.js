import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
    // Validar que el texto no esté vacío o contenga solo espacios/tabulaciones
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  // Función para manejar el evento de cerrar el modal
  function closeModalHandler() {
    props.onCloseModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* Imagen decorativa */}
        <Image
          style={styles.image}
          source={require("../assets/img/goal.png")}
        />
        {/* Input para ingresar el texto del objetivo */}
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor="#cccccc"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            {/* Botón para agregar el objetivo */}
            <Button title="Add Goal" onPress={addGoalHandler} color="#262729" />
          </View>
          <View style={styles.button}>
            {/* Botón para cerrar el modal */}
            <Button
              title="Close Modal"
              onPress={closeModalHandler}
              color="#262729"
            />
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
    padding: 16,
    backgroundColor: "#373b40",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    color: "white",
    borderRadius: 6,
    padding: 3,
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
