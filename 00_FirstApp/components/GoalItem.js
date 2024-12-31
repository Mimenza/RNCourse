import { StyleSheet, View, Text, Pressable } from "react-native";

// Componente que representa un ítem de objetivo
function GoalItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteGoal.bind(this, props.id)}
      // Estilo para cuando el ítem es presionado
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        {/* Texto del objetivo */}
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  // Estilo para el ítem de objetivo
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#373b40",
  },
  // Estilo para cuando el ítem es presionado
  pressedItem: {
    opacity: 0.8,
    transform: [{ scale: 0.99 }],
  },
  // Estilo para el texto del objetivo
  goalText: {
    color: "white",
    padding: 8,
  },
});
