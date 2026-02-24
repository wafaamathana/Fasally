import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "./TabsNavigator";
import SettingsScreen from "../features/Settings/screens/SettingsScreen";
import { View, Text } from "react-native";
import ProfileScreen from "../features/Settings/components/UpdateProfile/screens/profile/ProfileScreen";

import ItemDetailsScreen from "../features/Settings/components/UpdateProfile/screens/profile/ItemDetailsScreen";
const Stack = createNativeStackNavigator();

const DummyScreen = ({ title }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 20 }}>{title}</Text>
  </View>
);

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Settings" component={SettingsScreen} />

      {/* Dummy screens مؤقتة */}

      <Stack.Screen
        name="EditProfile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
      <Stack.Screen
        name="Addresses"
        children={() => <DummyScreen title="Addresses" />}
      />
      <Stack.Screen
        name="Payments"
        children={() => <DummyScreen title="Payments" />}
      />
      {/** */}

      <Stack.Screen
        name="ReportProblem"
        children={() => <DummyScreen title="ReportProblem" />}
      />
      <Stack.Screen
        name="ContactUs"
        children={() => <DummyScreen title="ContactUs" />}
      />
      <Stack.Screen
        name="OpenTailor"
        children={() => <DummyScreen title="Open a Tailor acc now!" />}
      />

      <Stack.Screen
        name="StoreRequest"
        children={() => <DummyScreen title="Store Request?" />}
      />
      <Stack.Screen
        name="Feedback"
        children={() => <DummyScreen title="Feedbackkkkk" />}
      />
    </Stack.Navigator>
  );
}
