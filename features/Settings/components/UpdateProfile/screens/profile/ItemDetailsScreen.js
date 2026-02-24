import { View, Text } from "react-native";

export default function ItemDetailsScreen({ route }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>{route.params?.title} opened</Text>
    </View>
  );
}
