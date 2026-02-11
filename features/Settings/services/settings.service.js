import { Alert } from "react-native";

export const changeLanguage = () => {
  Alert.alert("Language", "Change app language");
};

export const toggleTheme = () => {
  Alert.alert("Theme", "Toggle light / dark mode");
};

export const shareApp = () => {
  Alert.alert("Share", "Share app with friends");
};

export const logout = (navigation) => {
  Alert.alert("Logout", "Are you sure you want to logout?", [
    { text: "Cancel", style: "cancel" },
    {
      text: "Logout",
      style: "destructive",
      onPress: () =>
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        }),
    },
  ]);
};
