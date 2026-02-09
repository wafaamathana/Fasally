import { StyleSheet } from "react-native";

const PRIMARY = "#6A1B4D";
const INACTIVE = "#C8C8C8";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  stars: {
    flexDirection: "row",
  },

  star: {
    color: PRIMARY,
    // marginRight: 2,
  },

  starInactive: {
    color: INACTIVE,
    //marginRight: 2,
  },

  reviews: {
    marginLeft: 2,
    fontSize: 10,
    color: "#777",
  },

  commentButton: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
