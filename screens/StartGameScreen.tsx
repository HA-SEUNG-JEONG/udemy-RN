import Card from "@/components/Card";
import InstructionText from "@/components/InstructionText";
import PrimaryButton from "@/components/PrimaryButton";
import Title from "@/components/Title";
import Colors from "@/utils/colors";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";

interface PickedNumberProps {
    pickedNumberHandler: (pickedNumber: number) => void;
}

const StartGameScreen = ({ pickedNumberHandler }: PickedNumberProps) => {
    const [enteredNumber, setEnteredNumber] = useState("");

    const numberInputHandler = (input: string) => {
        setEnteredNumber(input);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                "Invalid number!",
                "Number has to be a number between 1 and 99.",
                [
                    {
                        text: "OK",
                        style: "destructive", // 기본
                        onPress: resetInputHandler
                    }
                ]
            );
            return;
        }
        pickedNumberHandler(chosenNumber);
    };

    const resetInputHandler = () => {
        setEnteredNumber("");
    };

    return (
        <View style={styles.rootContainer}>
            <Title title="Guess My Number" />
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },

    numberInputInstruction: {
        color: Colors.accent500,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold"
    },
    numberInputText: {
        color: Colors.accent500,
        fontSize: 16
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});

export default StartGameScreen;
