import GameScreen from "@/screens/GameScreen";
import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [userNumber, setUserNumber] = useState<number | null>(null);

    const pickedNumberHandler = (pickedNumber: number) => {
        setUserNumber(pickedNumber);
    };
    let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen userNumber={userNumber} />;
    }
    // View는 콘텐츠가 들어갈만큼만 차지
    return (
        <LinearGradient
            colors={["#72063c", "#ddb52f"]}
            style={styles.container}
        >
            <ImageBackground
                source={require("../../assets/images/background.png")}
                resizeMode="cover"
                imageStyle={styles.backgroundImage}
                style={styles.container}
            >
                <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
