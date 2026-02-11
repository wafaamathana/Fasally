import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../screens/styles";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsItem({ title, subtitle, onPress }) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <View style={styles.iconContainer}>
          <Ionicons name="settings-outline" size={20} color="#FFF" />
        </View>

        <Text style={styles.itemTitle}>{title}</Text>
        {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}
