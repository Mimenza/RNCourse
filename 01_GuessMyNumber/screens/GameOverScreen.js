import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components//ui/Title";
import Colors from "../constants/colors";

import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onRestart}) {
  return (
    <View style={styles.viewContainer}>
      <Title> Game is Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.sumaryText}>
          Your phone needed
          <Text style={styles.highlight}> {roundsNumber} </Text>
          round to guess the number
          <Text style={styles.highlight}> {userNumber} </Text>
        </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  viewContainer: {
    paddingTop: 50,
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  sumaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary600,
  },
});
