import { IconButton } from "@/components/icon-button";
import { SignedHeader } from "@/components/signed-header";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function Home() {
    const router = useRouter();


    return (
        <>
            <SignedHeader />
            <View className="flex flex-row">

                <IconButton
                    title="Clientes"
                    iconName="users"
                    onPress={() => router.push('/(auth)/clients/')}
                />
                <IconButton
                    title="Produtos"
                    iconName="box"
                    onPress={() => router.push('/(auth)/products/')}
                />
            </View >
        </>
    )
}