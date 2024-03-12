import { products } from "@/app/utils/data/products";
import { formatCurrency } from "@/app/utils/functions/formatCurrency";
import { RouterHeader } from "@/components/router-header";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function ProductInfo() {
    const { id } = useLocalSearchParams();

    const product = products.find(item => item.id === id);

    return (
        <>
            <RouterHeader title="Informações do Produto">
                <View className="flex items-center justify-center h-32">
                    <Text className="text-gray-50 text-2xl">{product?.id} - {product?.descricao}</Text>
                </View>
            </RouterHeader>
            <ScrollView className="p-8">
                <View className="space-y-7 bg-gray-300 rounded-md py-20 px-3">
                    <View className="flex items-start border-b-[1px] border-blue-950">
                        <Text className="text-sm font-heading">
                            EAN
                        </Text>
                        <Text className="text-gray-50 bg-blue-950 text-lg p-1 rounded-md mb-2">
                            {product?.ean}
                        </Text>
                    </View>

                    <View className="flex flex-row justify-start items-center space-x-3">
                        <Text className="font-heading">Embalagem</Text>
                        <Text className="text-gray-50 text-lg font-bold bg-blue-950 p-1 rounded-md">{product?.embalagem}</Text>
                    </View>


                    <View className="flex flex-row space-x-10 border-b-[1px] border-blue-950">
                        <Text>
                            <Text className="font-bold">NCM:</Text> {product?.ncm}
                        </Text>
                        <Text><Text className="font-bold">CEST:</Text>  {product?.cest}</Text>
                    </View>
                </View>
            </ScrollView >
            <View className="fixed flex-row items-center h-20 bottom-0 p-2 bg-gray-200 justify-around">
                <View>
                    <Text className="text-green-600 font-heading text-2xl">{formatCurrency(product?.preco)}</Text>
                </View>
                <View>
                    <Text className="text-blue-950 font-heading text-2xl">Saldo: {product?.saldo?.toFixed(2)}</Text>
                </View>
            </View>
        </>
    )
}