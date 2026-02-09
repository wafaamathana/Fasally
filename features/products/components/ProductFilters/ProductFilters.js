import { View, Text, StyleSheet } from "react-native";

export const ProductFilters = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    fontWeight: "600",
    color: "#8B005D",
  },
});
