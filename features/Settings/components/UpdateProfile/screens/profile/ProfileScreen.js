import { ScrollView } from "react-native";
import styles from "./styles";

import ProfileHeader from "../../components/profile/ProfileHeader";
import SectionHeader from "../../components/profile/SectionHeader";
import SettingsItem from "../../components/profile/SettingsItem";
import PrimaryButton from "../../components/profile/PrimaryButton";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfileHeader />

      <SectionHeader title="About you" />

      <SettingsItem
        icon="person"
        title="Name"
        subtitle="Edit your account name"
      />

      <SettingsItem
        icon="male-female"
        title="Gender"
        subtitle="Select your gender"
      />

      <SettingsItem
        icon="calendar"
        title="Date of birth"
        subtitle="Let us know your age"
      />

      <SettingsItem
        icon="location"
        title="Location"
        subtitle="We use it to enhance your experience"
      />

      <SectionHeader title="Contact info" />

      <SettingsItem
        icon="call"
        title="Phone"
        subtitle="It will not appear to others"
      />

      <SettingsItem icon="mail" title="+ Add an e-mail" />

      <SectionHeader title="Other actions" />

      <SettingsItem
        icon="key"
        title="Change your password"
        subtitle="A preferred way securing your account"
      />

      <SettingsItem
        icon="trash"
        title="Delete your account"
        subtitle="You will be able to restore during 30 work-days"
        danger
      />

      <PrimaryButton title="Save changes" />
    </ScrollView>
  );
}
