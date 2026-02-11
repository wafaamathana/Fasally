import React from "react";
import { Text } from "react-native";
import styles from "../screens/styles";

export default function SectionHeader({ title }) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}
