import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { GameColors, ShadowStyles } from "@/constants/Colors";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

interface GameOverScreenProps {
  userNumber: number;
  roundsNumber: number;
  onStartNewGame: () => void;
}

const deviceWidth = Dimensions.get("window").width;
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
    padding: deviceWidth < 450 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: deviceWidth < 450 ? 150 : 200,
    height: deviceWidth < 450 ? 150 : 200,
    borderRadius: deviceWidth < 450 ? 75 : 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: GameColors.primary400,
    overflow: "hidden",
    margin: deviceWidth < 450 ? 24 : 36,
    ...ShadowStyles.card
  },
  image: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontFamily: "space-mono",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 24,
    marginVertical: 8
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: GameColors.primary500
  }
});
