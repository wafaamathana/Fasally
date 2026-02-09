import { FlatList } from "react-native";
import TailorCard from "../TailorCard/TailorCard";
import { TAILORS } from "../../services/tailors.service";

function TailorsList() {
  return (
    <FlatList
      data={TAILORS}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TailorCard item={item} />}
    />
  );
}

export default TailorsList;
