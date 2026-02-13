import { StyleSheet, Text, View } from "react-native";

function Chat() {
  return (
    <>
      <View style={Styles.container}>
        <Text>Chat page</Text>
      </View>
    </>
  );
}

export default Chat;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
