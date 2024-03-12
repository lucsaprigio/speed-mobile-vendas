import { Feather } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "tailwindcss/colors";

type Props = TouchableOpacityProps & {
    title: string | any;
    children: React.ReactNode;
}

export function RouterHeader({ title, children, ...rest }: Props) {
    return (
        <SafeAreaView className="bg-blue-950 p-5">
            <View className="flex flex-row items-center justify-between mb-3">
                <TouchableOpacity {...rest}>
                    <Feather
                        name="chevron-left"
                        size={24}
                        color={colors.gray[50]}
                    />
                </TouchableOpacity>
                <Text className="text-2xl text-gray-50">{title}</Text>
                <View></View>
            </View>
            {children}
        </SafeAreaView>
    )
}