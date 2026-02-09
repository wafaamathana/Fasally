import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { GlobalStyles } from "../../../../Constants/Styles";
import Rating from "../../../../Shared/ui/Rating/Rating";
function TailorCard({ item }) {
  /*function renderStars(rate) {
    return [...Array(5)].map((_, index) => (
      <Ionicons
        key={index}
        name={index < rate ? "star" : "star-outline"}
        size={14}
        color="#6A1B4D"
      />
    ));
  }*/ // for future use

  return (
    <Pressable style={styles.card}>
      {/* Image */}
      <View style={styles.imageContainer}>
        {item.image ? (
          <Image source={item.image} style={styles.image} />
        ) : (
          <Image
            source={require("../../../../assets/ADVs/nullPhoto.png")}
            style={styles.image}
          />
        )}
      </View>

      {/* Name */}
      <Text style={styles.name}>{item.name}</Text>

      {/* Description */}
      <Text style={styles.desc} numberOfLines={2}>
        {item.description}
      </Text>

      {/* Tags */}
      <View style={styles.tagsContainer}>
        {item.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>

      {/* Rating */}
      <Rating
        rating={4.5}
        reviewsCount={116}
        onPressComments={() => navigation.navigate("Reviews")}
      />
    </Pressable>
  );
}

export default TailorCard;

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  card: {
    width: deviceWidth / 2.4,
    height: deviceHeight / 4.5,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginRight: "2.5%",
    marginTop: 60, // مساحة للصورة
    elevation: 4,
    position: "relative", //  مهم
    paddingTop: 35,
    marginBottom: 20,
    borderColor: GlobalStyles.colors.dark_purple,
    borderWidth: 3,
    justifyContent: "space-between",

    alignItems: "center",
  },
  imageContainer: {
    width: "70%",
    height: "100%",
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#6A1B4D",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: -60,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",

    height: "100%",
    borderRadius: 100,
    zIndex: 10,
    elevation: 6,
    resizeMode: "contain",
    //marginBottom:5
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  desc: {
    textAlign: "center",
    fontSize: 12,
    color: "#777",
    //marginBottom: "5%",
  },
  tagsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 6,
    //marginBottom: "6%",
  },
  tag: {
    backgroundColor: "#F3E5F5",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    borderRadius: 12,
  },
  tagText: {
    fontSize: 10,
    color: "#6A1B4D",
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  stars: {
    flexDirection: "row",
  },
  reviewText: {
    fontSize: 12,
    color: "#777",
    //marginTop: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginTop: 6,
  },
});
