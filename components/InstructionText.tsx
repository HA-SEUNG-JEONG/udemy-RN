import { GameColors } from "@/constants/Colors";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface InstructionTextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "space-mono",
    color: GameColors.accent500,
    fontSize: 24,
    textAlign: "center"
  }
});

export default InstructionText;
