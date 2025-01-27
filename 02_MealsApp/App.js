import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CatergoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 2, // Add this line
  },
});
