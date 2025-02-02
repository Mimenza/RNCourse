import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoriesScreen() {
  const navigation = useNavigation();

  function navigateToMealsOverview(categoryId, categoryTitle) {
    navigation.navigate("MealsOverview", {
      categoryId: categoryId,
      categoryTitle: categoryTitle,
    });
  }

  return (
    <View style={styles.screen}>
      {/* Example category item */}
      <Pressable onPress={() => navigateToMealsOverview('c1', 'Italian')}>
        <Text>Italian</Text>
      </Pressable>
      {/* Add more categories as needed */}
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
