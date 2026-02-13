import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getBestSellingProducts } from "../services/products.service";
import ProductGrid from "../components/ProductGrid/ProductGrid";
function FabricsScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBestSellingProducts().then(setProducts);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Best selling</Text>

      <ProductGrid
        products={products}
        onProductPress={(id) => navigation.navigate("ProductDetails", { id })}
      />
    </View>
  );
}
export default FabricsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
});
