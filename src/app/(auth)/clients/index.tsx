import { Client } from "@/DTO/ClientDTO";
import { clients } from "@/app/utils/data/clients";
import { ClientCard } from "@/components/client";
import { RouterHeader } from "@/components/router-header";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";

export default function Clients() {
    const router = useRouter();

    function handleGoBack() {
        return router.back();
    }

    function handleShowClient(client: Client) {
        return router.push({ pathname: `/client/${client.id}`, params: { ...client } });
    }

    const [searchClient, setSearchClient] = useState('');
    const clientList = clients;

    return (
        <>
            <RouterHeader title="Clientes Cadastrados" onPress={handleGoBack}>
                <View className="relative flex flex-row items-center justify-center">
                    <TextInput
                        className="flex-1 h-10 bg-gray-50 my-2 rounded-md p-2"
                        placeholder="Pesquisar"
                        value={searchClient}
                        onChangeText={setSearchClient}
                    />
                    <TouchableOpacity className="absolute h-10 top-4 right-0" activeOpacity={0.7} onPress={() => setSearchClient('')}>
                        {
                            !!searchClient &&
                            <Feather
                                name="x"
                                size={22}
                                color={colors.blue[950]}
                            />
                        }
                    </TouchableOpacity>
                </View>
            </RouterHeader>
            <ScrollView>
                {
                    clientList.map((client) => (
                        <ClientCard
                            onPress={() => handleShowClient(client)}
                            key={client.id}
                            client={{
                                id: client.id,
                                razao: client.razao,
                                cidade: client.bairro,
                                uf: client.uf,
                                bairro: client.bairro,
                                contribuinte: client.contribuinte,
                                cpf_cnpj: client.cpf_cnpj,
                                email: client.email,
                                endereco: client.endereco,
                                fantasia: client.fantasia,
                                situacao: client.situacao,
                                telefone: client.telefone,
                                tipo_pessoa: client.tipo_pessoa
                            }}
                        />
                    ))
                }
            </ScrollView>
        </>
    )
}