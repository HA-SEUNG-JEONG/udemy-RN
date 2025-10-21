import Colors from "@/utils/colors";
import { StyleSheet, Text, View } from "react-native";

const GuessingLogItem = ({
  roundNumber,
  guess
}: {
  roundNumber: number;
  guess: number;
}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent&apos;s Guess: {guess}</Text>
    </View>
  );
};

export default GuessingLogItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: Colors.primary400,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  }
});
