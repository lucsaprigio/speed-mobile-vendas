import { Client } from "@/DTO/ClientDTO"
import { Link, LinkProps } from "expo-router";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ClientData = Client;

type ClientProps = TouchableOpacityProps & {
    client: ClientData;
}

export function ClientCard({ client, ...rest }: ClientProps) {
    return (
        <TouchableOpacity className="border-b-[1px] gap-1 px-2 my-2" {...rest}>
            <View className="flex flex-col ">
                <Text className="text-xs">Razão Social</Text>
                <Text className="text-lg font-heading">{client.razao}</Text>
            </View>
            <View className="flex flex-col">
                <Text className="text-xs">Nome Fantasia</Text>
                <Text className="text-lg font-heading">{client.fantasia}</Text>
            </View>
            <View className="flex flex-col">
                <Text className="text-xs">Cidade - UF</Text>
                <Text className="text-lg font-heading">{client.cidade} - {client.uf}</Text>
            </View>
            <View className="flex flex-col">
                <Text className="text-xs">Situação</Text>
                <Text className="text-lg font-heading">{client.situacao} - {client.id}</Text>
            </View>
            <View className="flex flex-col">
                <Text className="text-xs">Rota Faturamento</Text>
                <Text className="text-lg font-heading">{client.rota}</Text>
            </View>
        </TouchableOpacity>
    )
}