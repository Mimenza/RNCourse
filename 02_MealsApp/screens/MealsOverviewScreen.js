import { FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

import { View, Text, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryID;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData) {
    return (
      <MealItem
        {...itemData.item}
        // Ensure other necessary props are passed to MealItem
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e0e0e0', // Cambia a un blanco grisáceo
  },
});
