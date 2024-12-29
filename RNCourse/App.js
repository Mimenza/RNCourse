import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // Estado para almacenar los objetivos del curso
  const [courseGoals, setCourseGoals] = useState([]);
  const [modaIsVisible, setModalVisibility] = useState(false);

  // Función para agregar un nuevo objetivo a la lista
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  function VisibilityModal() {
    setModalVisibility((currentVisibility) => !currentVisibility);
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Open Modal" color="#5e0acc" onPress={VisibilityModal} />
      {/* Componente para ingresar y agregar objetivos */}
      {modaIsVisible && (
        <GoalInput
          visible={modaIsVisible}
          onAddGoal={addGoalHandler}
          onCloseModal={VisibilityModal}
        />
      )}
      <View style={styles.goalsContainer}>
        {/* Lista de objetivos */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.key}
                text={itemData.item.text}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
