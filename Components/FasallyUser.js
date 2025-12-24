import { Image, StyleSheet } from "react-native";
const profileImg = "../assets/FasallyUser.png";

const styles = StyleSheet.create({
  userImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    margin: 2,
  },
});

const DisplayAnImage = () => (
  <Image style={styles.userImg} source={require(profileImg)} />
);

export default DisplayAnImage;
