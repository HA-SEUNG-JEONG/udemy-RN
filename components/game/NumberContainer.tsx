import { GameColors, ShadowStyles } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: GameColors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    ...ShadowStyles.medium
  },
  number: {
    fontSize: 60,
    fontFamily: "open-sans-bold",
    color: GameColors.accent500
  }
});
