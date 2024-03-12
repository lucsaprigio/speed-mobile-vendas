import { Product } from "@/DTO/ProductDTO";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import colors from "tailwindcss/colors";

type ProductData = Product;

type ProductProps = TouchableOpacityProps & {
    product: ProductData;
}

export function ProductCard({ product, ...rest }: ProductProps) {
    return (
        <TouchableOpacity className="rounded-lg bg-blue-950 gap-1 px-2 my-2" {...rest} activeOpacity={0.7}>
            <View className="flex text-gray-50">
                <Text className="text-xs text-gray-50 ">Descrição</Text>
                <Text className="text-lg text-gray-50 font-heading">{product.id} - {product.descricao}</Text>
            </View>
            <View className="flex flex-col text-gray-50 ">
                <Text className="text-lg text-gray-50  font-heading">{product.preco}</Text>
            </View>
            <View className="flex flex-col text-gray-50 ">
                <Text className="text-lg text-gray-50 font-heading">{product.embalagem}</Text>
            </View>
            <View className="flex flex-col">
                <Text className="text-xs text-gray-50 ">Situação</Text>
                <Text className="text-lg  text-gray-50 font-heading">{product.embalagem} - {product.id}</Text>
            </View>
            <View className="flex flex-col">
                <Text className="text-xs text-gray-50 ">Rota Faturamento</Text>
                <Text className="text-lg text-gray-50  font-heading">{product.ncm}</Text>
            </View>
        </TouchableOpacity>
    )
}