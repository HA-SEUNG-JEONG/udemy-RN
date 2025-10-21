import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import Colors from "@/utils/colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface GameOverScreenProps {
  userNumber: number;
  roundsNumber?: number;
  onStartNewGame: () => void;
}

const GameOverScreen = ({
  userNumber,
  roundsNumber,
  onStartNewGame
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title title="Game Over!" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.primary400,
    overflow: "hidden",
    margin: 36,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 3
  },
  image: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 24,
    marginVertical: 8
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500
  }
});
