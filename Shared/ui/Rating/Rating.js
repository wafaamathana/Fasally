import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Rating.styles";

function Rating({ rating = 0, reviewsCount = 0, onPressComments }) {
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <Ionicons key={i} name="star" size={16} style={styles.star} />,
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <Ionicons key={i} name="star-half" size={16} style={styles.star} />,
        );
      } else {
        stars.push(
          <Ionicons
            key={i}
            name="star-outline"
            size={16}
            style={styles.starInactive}
          />,
        );
      }
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      {/* Stars + reviews count */}
      <View style={styles.left}>
        <View style={styles.stars}>{renderStars()}</View>
        <Text style={styles.reviews}>({reviewsCount})</Text>
      </View>

      {/* Comments button */}
      <Pressable style={styles.commentButton} onPress={onPressComments}>
        <Ionicons name="chatbubble-ellipses-outline" size={18} color="#fff" />
      </Pressable>
    </View>
  );
}

export default Rating;
