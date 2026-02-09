import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./StorCard.Styles";
import Rating from "../../../../Shared/ui/Rating/Rating";
function StoreCard({ store, onPress }) {
  const { logo, name, description, rating, reviewsCount, isVerified } = store;

  return (
    <View style={styles.card}>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logo} />

        {isVerified && (
          <View style={styles.checkIcon}>
            <Ionicons name="checkmark" size={14} color="#fff" />
          </View>
        )}
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>VISIT THE STORE</Text>
      </Pressable>

      <Rating
        rating={4}
        reviewsCount={116}
        onPressComments={() => navigation.navigate("Reviews")}
      />
    </View>
  );
}

export default StoreCard;
