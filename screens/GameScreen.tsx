import NumberContainer from "@/components/game/NumberContainer";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }: { userNumber: number }) => {
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
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                        +
                    </PrimaryButton>
                </View>
            </View>
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
    buttonsContainer: {
        flex: 1,
        gap: 16,
        marginTop: 24
    }
});
