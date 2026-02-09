import { StyleSheet, Dimensions } from "react-native";
import { GlobalStyles } from "../../../../Shared/StylesColors";
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    width: deviceWidth / 2.4,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    //paddingTop: 70,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#6A1B4D",
    position: "relative",
    marginTop: 70,
    marginRight: "2.5%",
    elevation: 4,
  },

  logoWrapper: {
    width: "101",
    height: "60%", // مربعة
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6A1B4D",
    backgroundColor: "#fff",

    position: "absolute",
    top: -65, // نصها برا الكارد
    alignSelf: "center",

    justifyContent: "center",
    alignItems: "center",
    zIndex: 10, //  علشان تبقى فوق الكارد
  },

  logo: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "contain",
  },

  checkIcon: {
    position: "absolute",
    bottom: -5,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 11,
    backgroundColor: GlobalStyles.colors.pink,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 20, //  فوق الصورة
  },

  name: {
    marginTop: 8, //
    fontSize: 18,
    fontWeight: "700",
    color: GlobalStyles.colors.dark_purple,
    textAlign: "center",
    paddingTop: "16%",
  },

  description: {
    fontSize: 12,
    textAlign: "center",
    color: "#999",
    marginVertical: 6,
  },

  button: {
    width: "100%",
    backgroundColor: GlobalStyles.colors.dark_purple,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 8,
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },

  reviews: {
    fontSize: 12,
    color: "#777",
    marginLeft: 4,
  },
});

export default styles;
