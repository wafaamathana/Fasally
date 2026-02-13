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
      //numColumns={2}
      //columnWrapperStyle={{ justifyContent: "space-between" }}
      //scrollEnabled={false}
      //showsVerticalScrollIndicator={false}
      // this made an error when used with the scrollview in the home screen, so I removed it and added it to the scrollview instead, but it can be added back if needed and tested with the scrollview
      horizontal
    />
  );
}

export default ProductGrid;
