import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TailorVector from "../assets/Icons/TailorVector.svg";
import Fabric from "../assets/Icons/Fabric.svg";
import HomeScreen from "../features/home/screens/HomeScreen";
import { GlobalStyles } from "../Constants/Styles";
import TailorsScreen from "../features/tailors/Screens/TailorsScreen";
import FabricsScreen from "../features/products/screens/FabricsScreen";
import ChatScreen from "../features/chat/screens/ChatScreen";

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

      <BottomTab.Screen
        name="Tailors"
        component={TailorsScreen}
        options={{
          tabBarLabel: "Tailors",
          tabBarIcon: ({ size, color }) => (
            <TailorVector width={size} height={size} fill={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Fabrics"
        component={FabricsScreen}
        options={{
          tabBarLabel: "Fabrics",
          tabBarIcon: ({ size, color }) => (
            <Fabric width={size} height={size} fill={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
