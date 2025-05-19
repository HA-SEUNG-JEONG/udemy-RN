import PrimaryButton from "@/components/PrimaryButton";
import { TextInput, View } from "react-native";

const StartGameScreen = () => {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;
