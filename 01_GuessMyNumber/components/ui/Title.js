import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { processFontFamily } from "expo-font";

function Title({ children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = {
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    //fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary500,
    borderRadius: 10,
    padding: 15,
  },
};
