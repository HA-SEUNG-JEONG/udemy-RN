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
                        ? [styles.buttonInnerontainer, styles.pressed]
                        : styles.buttonInnerontainer
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
    buttonInnerontainer: {
        backgroundColor: "#72063c",
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
