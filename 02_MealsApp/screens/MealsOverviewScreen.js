import { FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const { categoryID, categoryTitle } = route.params;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryID) >= 0;
  });

  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryTitle]);

  return (
    <View style={styles.container}>
      <Text>{categoryTitle}</Text>
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
    backgroundColor: "#e0e0e0", // Cambia a un blanco grisáceo
  },
});
