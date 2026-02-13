import { View, Text, Pressable } from "react-native";
import styles from "../../screens/styles";
import LanguageToggle from "./LanguageToggle";
import { Ionicons } from "@expo/vector-icons";
import LanguageVector from "../../../../assets/Icons/LanguageVector.svg";
export default function LanguageItem({ title, onPress }) {
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
            <LanguageVector width={20} height={20} color="#FFF" />
          </View>

          <Text style={[styles.itemTitle, { marginLeft: 10 }]}>{title}</Text>
        </View>

        {/* Right Side (Language Toggle) */}
        <LanguageToggle
          selected="en"
          onChange={(lang) => {
            console.log("Selected:", lang);
          }}
        />
      </View>
    </Pressable>
  );
}
