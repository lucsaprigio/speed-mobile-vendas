import { Client } from "@/DTO/ClientDTO";
import { RouterHeader } from "@/components/router-header";
import { router, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";


export default function ClientInfo() {
    const { id } = useLocalSearchParams();

    function handleGoBack() {
        return router.back();
    }

    useEffect(() => {
        console.log(id);
    }, [])

    return (
        <RouterHeader title="Cliente" onPress={handleGoBack}>
            <Text></Text>
        </RouterHeader>
    )
}