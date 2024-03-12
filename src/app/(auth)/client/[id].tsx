import { clients } from "@/app/utils/data/clients";
import { Button } from "@/components/button";
import { RouterHeader } from "@/components/router-header";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";


export default function ClientInfo() {
    const { id } = useLocalSearchParams();

    const client = clients.find(item => item.id === id);

    function handleGoBack() {
        return router.back();
    }

    useEffect(() => {
        console.log(client);
    }, [])

    return (
        <>
            <RouterHeader title="Informações do Cliente" onPress={handleGoBack}>
                <View className="flex items-center justify-center">
                    <Text className="text-gray-50 text-2xl font-heading my-3">{client?.id} - {client?.razao}</Text>
                </View>
            </RouterHeader>
            <ScrollView className="p-3">
                <View className="flex flex-row items-center justify-center space-x-2">
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center space-x-3 bg-blue-950 rounded-md p-3" activeOpacity={0.7}>
                        <Feather name="edit" size={18} color={colors.gray[50]} />
                        <Text className="text-gray-50 text-lg">Novo Pedido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 flex-row items-center justify-center space-x-3 bg-blue-950 rounded-md p-3" activeOpacity={0.7}>
                        <MaterialIcons name="attach-money" size={18} color={colors.gray[50]} />
                        <Text className="text-gray-50 text-lg">Financeiro</Text>
                    </TouchableOpacity>
                </View>
                <View className="mt-10 space-y-5">
                    <View className="flex-1 flex-row space-x-3 border-b-[1px] border-gray-500 items-center">
                        <Text className="text-sm font-bold">Código -</Text>
                        <Text className="text-lg">{client?.id}</Text>
                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Razão Social</Text>
                        <Text className="text-lg text-blue-950">{client?.razao}</Text>

                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Nome Fantasia</Text>
                        <Text className="text-lg text-blue-950">{client?.fantasia}</Text>

                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">CPF/CNPJ</Text>
                        <Text className="text-lg text-blue-950">{client?.cpf_cnpj}</Text>

                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">E-mail -</Text>
                        <Text className="text-lg text-blue-950">{client?.email}</Text>

                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Endereço -</Text>
                        <Text className="text-lg text-blue-950">{client?.endereco} - {client?.bairro}</Text>
                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Cidade -</Text>
                        <Text className="text-lg text-blue-950">{client?.cidade} - {client?.uf}</Text>
                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Situação</Text>
                        <Text className="text-lg text-blue-950">{client?.situacao}</Text>
                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Rota -</Text>
                        <Text className="text-lg text-blue-950">{client?.rota}</Text>
                    </View>
                    <View className="flex-1 border-b-[1px] border-gray-500 items-start">
                        <Text className="text-sm font-bold">Observação -</Text>
                        <Text className="text-lg text-blue-950">{client?.obs}</Text>

                    </View>
                </View>
            </ScrollView>
        </>
    )
}