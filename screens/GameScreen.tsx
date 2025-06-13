import NumberContainer from "@/components/game/NumberContainer";
import Title from "@/components/Title";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            <Title title="Opponents Number" />
            {currentGuess && (
                <>
                    <NumberContainer>{currentGuess}</NumberContainer>
                </>
            )}
            <View>
                <Text>Higher or lower</Text>+ -
            </View>
            <View>Log ROUNDS</View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
});
