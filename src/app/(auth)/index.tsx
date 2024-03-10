import { IconButton } from "@/components/icon-button";
import { SignedHeader } from "@/components/signed-header";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();


    return (
        <>
            <SignedHeader />
            <IconButton
                title="Clientes"
                iconName="users"
                onPress={() => router.push('/(auth)/clients/')}
            />
        </>
    )
}