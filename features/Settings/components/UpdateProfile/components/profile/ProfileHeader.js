import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../../../../assets/ADVs/nullPhoto.png")}
        style={styles.avatar}
      />
      <Text style={styles.username}>Yasin Samy</Text>
    </View>
  );
}
