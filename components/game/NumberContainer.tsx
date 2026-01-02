import { GameColors, ShadowStyles } from "@/constants/Colors";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const NumberContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: GameColors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
    ...ShadowStyles.medium
  },
  number: {
    fontSize: deviceWidth < 380 ? 28 : 60,
    fontFamily: "open-sans-bold",
    color: GameColors.accent500
  }
});
