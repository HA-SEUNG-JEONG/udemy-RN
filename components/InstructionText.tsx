import Colors from "@/utils/colors";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

const InstructionText = ({
    children,
    style
}: {
    children: string;
    style?: StyleProp<TextStyle>;
}) => {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        textAlign: "center"
    }
});

export default InstructionText;
