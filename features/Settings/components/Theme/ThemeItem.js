import { View, Text, Pressable } from "react-native";
import styles from "../../screens/styles";
import ThemeToggle from "./ThemeToggle";
import ThemeMood from "../../../../assets/Icons/ThemeMood.svg";
import { Ionicons } from "@expo/vector-icons";
export default function ThemeItem({ title, onPress }) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side (Icon + Title) */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.iconContainer}>
            <ThemeMood width={20} height={20} color="#FFF" />
          </View>

          <Text style={[styles.itemTitle, { marginLeft: 10 }]}>{title}</Text>
        </View>

        {/* Right Side (Language Toggle) */}
        <ThemeToggle
          selected="dark"
          onChange={(mode) => {
            console.log("Theme:", mode);
          }}
        />
      </View>
    </Pressable>
  );
}
