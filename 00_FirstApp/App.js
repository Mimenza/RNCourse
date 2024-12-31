import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // Estado para almacenar los objetivos del curso
  const [courseGoals, setCourseGoals] = useState([]);
  // Estado para controlar la visibilidad del modal
  const [modaIsVisible, setModalVisibility] = useState(false);

  // Función para agregar un nuevo objetivo a la lista
  function addGoalHandler(enteredGoalText) {
    // Validar que el texto no esté vacío o contenga solo espacios/tabulaciones
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  // Función para eliminar un objetivo de la lista
  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== id);
    });
  }

  // Función para alternar la visibilidad del modal
  function VisibilityModal() {
    setModalVisibility((currentVisibility) => !currentVisibility);
  }

  return (
    <>
      {/* Barra de estado */}
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        {/* Botón para abrir el modal */}
        <Button title="Open Modal" color="#373b40" onPress={VisibilityModal} />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#787b82",
  },
  goalsContainer: {
    flex: 5,
  },
});
