import { Text, View } from "react-native";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
    <View>
        <Text>{children}</Text>
    </View>
);

export default PrimaryButton;
