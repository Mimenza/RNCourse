import React from "react";
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";

function MealItem(itemData) {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }}
       style={({ pressed }) => pressed ? styles.buttonPressed : null
      }>
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
          <Image source={{ uri: itemData.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{itemData.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{itemData.duration}m</Text>
          <Text style={styles.detailItem}>
            {itemData.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {itemData.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
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
