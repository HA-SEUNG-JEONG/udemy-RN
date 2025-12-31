import { GameColors, ShadowStyles } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface GuessingLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessingLogItem = ({ roundNumber, guess }: GuessingLogItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent&apos;s Guess: {guess}</Text>
    </View>
  );
};

export default React.memo(GuessingLogItem);

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: GameColors.primary400,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    ...ShadowStyles.medium
  }
});
