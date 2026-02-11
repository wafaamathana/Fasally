import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import SettingsItem from "../components/SettingsItem";
import SectionHeader from "../components/SectionHeader";
import * as SettingsService from "../services/settings.service";
import HeadLine from "../../../Shared/ui/HeadLine";

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Profile */}
      <View style={styles.profileCard}>
        <View style={styles.avatar} />
        <Text style={styles.name}>y3sinsamy </Text>
      </View>

      {/* Preferences */}
      <HeadLine>Preferences</HeadLine>
      <SettingsItem
        title="App language"
        subtitle="English"
        onPress={SettingsService.changeLanguage}
      />

      <SettingsItem
        title="Current theme"
        subtitle="Light / Dark"
        onPress={SettingsService.toggleTheme}
      />

      {/* Account */}
      <HeadLine>Your account</HeadLine>

      <SettingsItem
        title="Update profile info"
        subtitle="Here you can customize your profile & information about you."
        onPress={() => navigation.navigate("EditProfile")}
      />

      <SettingsItem
        title="My addresses"
        subtitle="Manage your addresses and graphical locations."
        onPress={() => navigation.navigate("Addresses")}
      />

      <SettingsItem
        title="Payment methods"
        subtitle="Manage your cards and other digital payment methods."
        onPress={() => navigation.navigate("Payments")}
      />

      {/* Contact */}
      <HeadLine>Let’s get in touch</HeadLine>

      <SettingsItem
        title="Report a problem"
        subtitle="f you encounter difficulty using Fasally app, let us know!"
        onPress={() => navigation.navigate("ReportProblem")}
      />

      <SettingsItem
        title="Contact us"
        subtitle="You can find us on major social media platforms"
        onPress={() => navigation.navigate("ContactUs")}
      />

      {/* Partner */}
      <HeadLine>Be a partner</HeadLine>

      <SettingsItem
        title="Open a tailor account"
        subtitle="If you have the skill you can start making money just now!"
        onPress={() => navigation.navigate("OpenTailor")}
      />

      <SettingsItem
        title="Request a store account"
        subtitle="Have a store? you can become a partner and sel on Fasally."
        onPress={() => navigation.navigate("StoreRequest")}
      />

      {/* Footer */}
      <HeadLine>We grow with you</HeadLine>
      <SettingsItem
        title="Leave a feedback"
        subtitle="Your feedback helps us develop our services."
        onPress={() => navigation.navigate("Feedback")}
      />

      <SettingsItem
        title="Share the app"
        subtitle="Don't keep it, let's bring others and make some noise."
        onPress={SettingsService.shareApp}
      />

      <SettingsItem
        title="logout"
        subtitle="Don't be gone too long, we'll miss you."
        onPress={() => SettingsService.logout(navigation)}
      />
      {/* Logout */}
    </ScrollView>
  );
}
