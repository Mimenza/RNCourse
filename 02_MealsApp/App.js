import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import CategoriesScreen from './screens/CatergoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <SafeAreaView style={styles.container}>
        <CategoriesScreen/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Add this line
  },
});
