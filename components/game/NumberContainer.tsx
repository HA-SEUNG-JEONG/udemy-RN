import Colors from "@/utils/colors";
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
        borderColor: Colors.accent500,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    number: {
        fontSize: 60,
        fontFamily: "open-sans-bold",
        color: Colors.accent500
    }
});
