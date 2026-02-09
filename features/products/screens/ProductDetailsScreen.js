import { View, Text, StyleSheet } from "react-native";
import { ColorSelector } from "../components/ColorSelector/ColorSelector";

export const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <ColorSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
});
