import { Pressable, Text } from "react-native";
import styles from "./styles";

export default function PrimaryButton({ title }) {
  return (
    <Pressable style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </Pressable>
  );
}
