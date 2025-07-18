import GameOverScreen from "@/screens/GameOverScreen";
import GameScreen from "@/screens/GameScreen";
import StartGameScreen from "@/screens/StartGameScreen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
    const [userNumber, setUserNumber] = useState<number>(0);
    const [isGameOver, setIsGameOver] = useState<boolean>(true);
    const [fontsLoaded] = useFonts({
        "open-sans": require("../../assets/fonts/SpaceMono-Regular.ttf"),
        "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf")
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const pickedNumberHandler = (pickedNumber: number) => {
        setUserNumber(pickedNumber);
        setIsGameOver(false);
    };

    const gameOverHandler = () => {
        setIsGameOver(true);
    };

    let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

    if (userNumber) {
        screen = (
            <GameScreen
                userNumber={userNumber}
                gameOverHandler={gameOverHandler}
            />
        );
    }
    if (isGameOver && userNumber) {
        screen = <GameOverScreen />;
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
