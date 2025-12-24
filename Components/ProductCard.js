import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ProductCard() {
  return (
    <View style={styles.card}>
      
      {/* Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: "https://images.unsplash.com/photo-1582582621959-48d27397dc69" }}
          style={styles.image}
        />
        <Text style={styles.imageCounter}>1/12</Text>
      </View>

      {/* Title */}
      <Text style={styles.title} numberOfLines={2}>
        Velvet fabric with floral patterns for designs t...
      </Text>

      {/* Colors */}
      <View style={styles.colorsContainer}>
        <View style={[styles.colorDot, { backgroundColor: "#7b2cbf" }]} />
        <View style={[styles.colorDot, { backgroundColor: "#e63946" }]} />
        <View style={[styles.colorDot, { backgroundColor: "#1d3557" }]} />
      </View>

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>219.99 EGP/m</Text>
        <Text style={styles.oldPrice}>248.00 EGP/m</Text>
      </View>

      {/* Rating + Actions */}
      <View style={styles.footer}>
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="#f4a261" />
          <Ionicons name="star" size={14} color="#f4a261" />
          <Ionicons name="star" size={14} color="#f4a261" />
          <Ionicons name="star" size={14} color="#f4a261" />
          <Ionicons name="star-outline" size={14} color="#f4a261" />
          <Text style={styles.ratingText}>(57)</Text>
        </View>

        <View style={styles.actions}>
          <Pressable>
            <Ionicons name="heart-outline" size={20} color="#7b2cbf" />
          </Pressable>
          <Pressable>
            <Ionicons name="cart-outline" size={20} color="#7b2cbf" />
          </Pressable>
        </View>
      </View>

    </View>
  );
}

export default ProductCard;
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    width: 200,
    elevation: 4,
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
    fontSize: 13,
    fontWeight: "600",
  },
  colorsContainer: {
    flexDirection: "row",
    marginVertical: 6,
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 6,
  },
  oldPrice: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 11,
    marginLeft: 4,
    color: "gray",
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});
