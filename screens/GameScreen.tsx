import Card from "@/components/Card";
import NumberContainer from "@/components/game/NumberContainer";
import InstructionText from "@/components/InstructionText";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

interface GameScreenProps {
    userNumber: number;
    gameOverHandler: (guesses: number) => void;
}

const GameScreen = ({ userNumber, gameOverHandler }: GameScreenProps) => {
    const [minBoundary, setMinBoundary] = useState(1);
    const [maxBoundary, setMaxBoundary] = useState(100);
    const generateRandomBetween = (
        min: number,
        max: number,
        exclude: number
    ) => {
        const randomNum = Math.floor(Math.random() * (max - min)) + min;
        if (randomNum === exclude) {
            const nextGuess = randomNum === min ? randomNum + 1 : randomNum - 1;
            return nextGuess;
        }
        return randomNum;
    };
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOverHandler(guessRounds.length);
        }
    }, [currentGuess, userNumber, gameOverHandler, guessRounds.length]);

    const nextGuessHandler = (direction: "lower" | "greater") => {
        // Check if the user is lying about the direction
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't Lie!", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" }
            ]);
            return;
        }

        // Update boundaries based on the direction
        if (direction === "lower") {
            setMaxBoundary(currentGuess);
        } else {
            setMinBoundary(currentGuess + 1);
        }

        // Generate new random number within the new boundaries
        const newRandomNumber = generateRandomBetween(
            direction === "lower" ? minBoundary : currentGuess + 1,
            direction === "lower" ? currentGuess : maxBoundary,
            currentGuess
        );

        // Create new rounds array with the new guess
        const newGuessRounds = [...guessRounds, newRandomNumber];

        // Update state
        setCurrentGuess(newRandomNumber);
        setGuessRounds(newGuessRounds);

        // Check if the game is over (either by correct guess or no more possible numbers)
        if (
            newRandomNumber === userNumber ||
            (direction === "lower" && minBoundary >= currentGuess - 1) ||
            (direction === "greater" && currentGuess + 1 >= maxBoundary)
        ) {
            gameOverHandler(newGuessRounds.length);
        }
    };

    return (
        <View style={styles.screen}>
            <Title title="Opponents Number" />
            {currentGuess && <NumberContainer>{currentGuess}</NumberContainer>}
            <Card>
                <InstructionText style={styles.numberInputInstruction}>
                    Higher or lower?
                </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("lower")}
                        >
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("greater")}
                        >
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                <Text>Log ROUNDS</Text>
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonContainer: {
        flex: 1,
        padding: 24,
        gap: 16
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    numberInputInstruction: {
        fontSize: 24
    }
});
