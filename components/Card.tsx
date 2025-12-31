import { GameColors, ShadowStyles } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: GameColors.primary300,
    ...ShadowStyles.card
  }
});

export default Card;
