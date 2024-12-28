import { View, TextInput, Button, StyleSheet } from "react-native";

import { useState } from "react";

function GoalInput(props) {
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function clearGoalHandler() {
    props.onClearGoal();
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  const [enteredGoalText, setEnteredGoalText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
      <Button title="Clear Goal" onPress={clearGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "50%",
    marginRight: 8,
    padding: 8,
  },
});
