import { FlatList } from "react-native";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ products = [], onProductPress }) {
  if (products.length === 0) return null;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={() => onProductPress?.(item.id)} />
      )}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ProductGrid;
