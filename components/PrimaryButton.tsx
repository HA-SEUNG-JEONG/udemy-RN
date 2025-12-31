import { GameColors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface PrimaryButtonProps {
    children: React.ReactNode;
    onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonInnerContainer: {
        backgroundColor: GameColors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    text: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton;
