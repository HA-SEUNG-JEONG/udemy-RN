import Title from "@/components/Title";
import Colors from "@/utils/colors";
import { Image, StyleSheet, Text, View } from "react-native";

interface GameOverScreenProps {
    userNumber: number;
    roundsNumber?: number;
}

const GameOverScreen = ({ userNumber, roundsNumber }: GameOverScreenProps) => {
    return (
        <View style={styles.container}>
            <Title title="Game Over!" />
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/success.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed{" "}
                <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
                guess the number{" "}
                <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderWidth: 200,
        borderColor: Colors.primary400,
        overflow: "hidden",
        margin: 32,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 3
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginHorizontal: 24,
        marginVertical: 8
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary500
    }
});
