import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../../Constants/Styles";
function RatingStars({ rating }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {/* Container for stars */}
      {Array.from({ length: 5 }, (_, index) => {
        const starNumber = index + 1;
        return (
          <Ionicons
            key={starNumber}
            name={starNumber <= rating ? "star" : "star-outline"}
            size={14}
            color={GlobalStyles.colors.dark_purple}
          />
        );
      })}
    </View>
  );
}
export default RatingStars;
