import StartGameScreen from "@/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet } from "react-native";

export default function HomeScreen() {
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
                <StartGameScreen />
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
