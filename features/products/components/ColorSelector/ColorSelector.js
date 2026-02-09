import { View, Pressable, StyleSheet } from "react-native";

const colors = ["#800020", "#C19A6B", "#000", "#fff"];

export const ColorSelector = () => {
  return (
    <View style={styles.row}>
      {colors.map((color) => (
        <Pressable
          key={color}
          style={[styles.color, { backgroundColor: color }]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
  },
  color: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
  },
});
