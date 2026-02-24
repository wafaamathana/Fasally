import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function ProfileInputRow({
  icon,
  title,
  subtitle,
  rightContent,
}) {
  return (
    <View style={styles.item}>
      <View style={styles.left}>
        <Ionicons name={icon} size={20} color="#7A004F" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>

      <Text style={styles.rightText}>{rightContent}</Text>
    </View>
  );
}
