import { View } from "react-native";
import styles from "./styles";

export default function SettingsCard({ children }) {
  return <View style={styles.card}>{children}</View>;
}
