import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../../../Constants/Styles";
import Rating from "../../../../Shared/ui/Rating/Rating";
function ProductCard({ product, onPress }) {
  const { image, name, price, oldPrice, rating } = product;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={typeof image === "string" ? { uri: image } : image}
          style={styles.image}
        />
        <Text style={styles.imageCounter}>1/1</Text>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {name}
      </Text>

      <View style={styles.colorsContainer}>
        <View style={[styles.colorDot, { backgroundColor: "#840F20" }]} />
        <View style={[styles.colorDot, { backgroundColor: "#2E1FFF" }]} />
        <View style={[styles.colorDot, { backgroundColor: "#00882D" }]} />
      </View>

      <View style={styles.priceAndActions}>
        <View>
          <Text style={styles.price}>{price} EGP/m</Text>
          {oldPrice && <Text style={styles.oldPrice}>{oldPrice} EGP/m</Text>}
        </View>

        <Pressable style={styles.actions} onPress={onPress}>
          <Ionicons name="cart-outline" size={20} color="#fff" />
        </Pressable>
      </View>

      <Rating
        rating={4.5}
        reviewsCount={116}
        onPressComments={() => navigation.navigate("Reviews")}
      />
    </View>
  );
}

export default ProductCard;

const deviceWidth = Dimensions.get("window").width;
const CARD_WIDTH = deviceWidth / 2.4;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    width: CARD_WIDTH,
    elevation: 4,
    marginBottom: 16,
    marginRight: 12,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  imageCounter: {
    position: "absolute",
    right: 6,
    bottom: 6,
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    fontSize: 12,
    paddingHorizontal: 6,
    borderRadius: 6,
  },
  title: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "600",
  },
  colorsContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignSelf: "center",
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  priceAndActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
  },
  oldPrice: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
  },
  actions: {
    backgroundColor: GlobalStyles.colors.dark_purple,
    borderRadius: 6,
    padding: 6,
  },
  rating: {
    fontSize: 12,
    marginTop: 6,
  },
});
