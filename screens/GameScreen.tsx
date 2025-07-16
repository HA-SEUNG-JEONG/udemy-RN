import Card from "@/components/Card";
import NumberContainer from "@/components/game/NumberContainer";
import InstructionText from "@/components/InstructionText";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

interface GameScreenProps {
    userNumber: number;
    gameOverHandler: () => void;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOverHandler }: GameScreenProps) => {
    const generateRandomBetween = (
        min: number,
        max: number,
        exclude: number
    ) => {
        const randomNum = Math.floor(Math.random() * (max - min)) + min;
        if (randomNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        }
        return randomNum;
    };
    const initialGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        userNumber
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOverHandler();
        }
    }, [currentGuess, userNumber, gameOverHandler]);

    const nextGuessHandler = (direction: string) => {
        if (
            (direction === "lower" && currentGuess < userNumber) ||
            (direction === "greater" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't Lie!", "You know that this is wrong...", [
                {
                    text: "Sorry!",
                    style: "cancel"
                }
            ]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            userNumber
        );
        setCurrentGuess(newRandomNumber);
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
                            -
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={() => nextGuessHandler("greater")}
                        >
                            +
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
