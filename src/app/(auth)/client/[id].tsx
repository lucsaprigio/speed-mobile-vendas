import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ClientInfo() {
    const { client } = useLocalSearchParams();

    return (
        <View>
            <Text>{client}</Text>
        </View>
    )
}