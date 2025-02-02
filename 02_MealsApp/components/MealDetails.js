import { Text, View, StyleSheet } from 'react-native';

function MealDetails({ itemData }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{itemData.duration}m</Text>
      <Text style={styles.detailItem}>{itemData.complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>
        {itemData.affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});