import { products } from "@/app/utils/data/products";
import { ProductCard } from "@/components/product";
import { RouterHeader } from "@/components/router-header";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { formatCurrency } from '../../utils/functions/formatCurrency';
import { ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import colors from "tailwindcss/colors";
import { useRouter } from "expo-router";

export default function Products() {
    const [searchClient, setSearchClient] = useState('');
    const router = useRouter();

    const productsList = products;

    return (
        <>
            <RouterHeader title="Produtos">
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
            <ScrollView className="p-3">
                {
                    productsList.map((item) => (
                        <ProductCard
                            onPress={() => router.push(`/(auth)/product/${item.id}`)}
                            key={item.id}
                            product={{
                                id: item.id,
                                descricao: item.descricao,
                                cest: item.cest,
                                ean: item.ean,
                                embalagem: item.embalagem,
                                ncm: item.ncm,
                                preco: formatCurrency(item.preco),
                                linha: item.linha,
                                saldo: item.saldo
                            }}
                        />
                    ))
                }
            </ScrollView>
        </>
    )
}