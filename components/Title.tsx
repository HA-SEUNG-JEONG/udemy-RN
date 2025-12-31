import { GameColors } from "@/constants/Colors";
import { StyleSheet, Text } from "react-native";

const Title = ({ title }: { title: string }) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: GameColors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: GameColors.accent500,
    padding: 12
  }
});
