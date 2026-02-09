import { Ionicons } from "@expo/vector-icons";
import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { GlobalStyles } from "../../../../Shared/StylesColors";

function OrdersSummaryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.ordersCount}>2</Text>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.ordersText}>Orders</Text>
        <Text style={styles.inProgressText}>in progress</Text>

        <Pressable style={styles.seeMoreBtn}>
          <Text style={styles.seeMoreText}>SEE MORE</Text>
          <View style={styles.iconCircle}>
            <Ionicons name="chevron-forward" size={16} color="#fff" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default OrdersSummaryCard;
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.dark_purple,
    borderRadius: 9,
    padding: 6,
    width: deviceWidth / 2.2,
    height: deviceHeight / 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  leftSide: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "flex-start",
    height: "100%",
    //paddingBottom: 12,
    alignItems: "flex-start",
    //top: -12,
    paddingHorizontal: 12,
  },

  ordersCount: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },

  rightSide: {
    flex: 2,
    justifyContent: "space-between",
    height: "100%",
  },

  ordersText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    textTransform: "capitalize",
    numberOfLines: 1,
  },

  inProgressText: {
    fontSize: 16,
    color: "#E6CFFF",
  },

  seeMoreBtn: {
    flexDirection: "row",
    alignItems: "center",
  },

  seeMoreText: {
    color: "#D86BFF",
    fontSize: 14,
    fontWeight: "600",
    marginRight: 8,
  },

  iconCircle: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: "#D86BFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
