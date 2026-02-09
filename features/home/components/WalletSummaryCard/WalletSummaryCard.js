import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../../../Shared/StylesColors";

function WalletSummaryCard({ balance }) {
  return (
    <View style={styles.container}>
      {/* Left Side */}
      <View style={styles.leftSide}>
        <Text style={styles.title}>Fasally Wallet</Text>

        <Text style={styles.balance}>
          {balance.toLocaleString()} <Text style={styles.currency}>EGP</Text>
        </Text>

        <Pressable style={styles.seeMoreBtn}>
          <Text style={styles.seeMoreText}>SEE MORE</Text>
          <View style={styles.iconCircle}>
            <Ionicons name="chevron-forward" size={16} color="#fff" />
          </View>
        </Pressable>
      </View>

      {/* Right Side Decoration */}
      {/*<View style={styles.rightSide}>
        <View style={styles.cardIcon} />
      </View>*/}
    </View>
  );
}

export default WalletSummaryCard;
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    width: deviceWidth / 2.2,
    height: deviceHeight / 7,
    backgroundColor: "#fff",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.dark_purple,
    padding: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSide: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: GlobalStyles.colors.dark_purple,
  },

  balance: {
    fontSize: 19,
    fontWeight: "700",
    color: "#1BA3E2",
  },

  currency: {
    fontSize: 18,
    fontWeight: "600",
  },

  seeMoreBtn: {
    flexDirection: "row",
    alignItems: "center",
    //marginTop: 8,
  },

  seeMoreText: {
    fontSize: 14,
    color: "#D86BFF",
    fontWeight: "600",
    marginRight: 8,
  },

  iconCircle: {
    width: 25,
    height: 25,
    borderRadius: 15,
    backgroundColor: "#D86BFF",
    alignItems: "center",
    justifyContent: "center",
  },

  /* rightSide: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  cardIcon: {
    width: 100,
    height: 70,
    backgroundColor: "#D86BFF",
    borderRadius: 18,
    transform: [{ rotate: "-15deg" }],
  },*/
});
