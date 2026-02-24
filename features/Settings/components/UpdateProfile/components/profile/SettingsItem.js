import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function SettingsItem({ icon, title, subtitle, danger }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.singleCard}
      onPress={() => navigation.navigate("ItemDetails", { title })}
    >
      <View style={styles.left}>
        <View style={styles.iconWrapper}>
          <Ionicons
            name={icon}
            size={18}
            color={danger ? "#E53935" : "#7A004F"}
          />
        </View>

        <View style={{ marginLeft: 12 }}>
          <Text style={[styles.title, danger && styles.dangerText]}>
            {title}
          </Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>

      <Ionicons name="chevron-forward" size={18} color="#999" />
    </Pressable>
  );
}
