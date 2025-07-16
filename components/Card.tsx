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
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: "#3b041f",
        shadowOpacity: 0.25
    }
});

export default Card;
