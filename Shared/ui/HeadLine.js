import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Pressable } from "react-native";
function HeadLine({ children }) {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{children}</Text>
        {/* <Pressable style={styles.buttun}>
          <Text style={{ color: "#6A1B4D", textDecorationLine: "underline" }}>
            See More
          </Text>
          <Ionicons name="chevron-forward-outline" size={16} color="#6A1B4D" />
        </Pressable>*/}
      </View>
    </>
  );
}

export default HeadLine;
const styles = StyleSheet.create({
  textContainer: {
    paddingVertical: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  buttun: {
    flexDirection: "row",
    alignItems: "center",
    textDecorationLine: "underline",
  },
});
