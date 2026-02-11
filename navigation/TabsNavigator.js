import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../features/home/screens/HomeScreen";
import { GlobalStyles } from "../Constants/Styles";

const BottomTab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GlobalStyles.colors.dark_purple,
        tabBarInactiveTintColor: GlobalStyles.colors.gray,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
