import { FlatList } from "react-native";
import StoreCard from "../StoreCard/StoreCard";
import { STORES } from "../../services/stores.service";

function StoresList({ onStorePress }) {
  return (
    <FlatList
      data={STORES}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <StoreCard store={item} onPress={() => onStorePress?.(item.id)} />
      )}
      scrollEnabled={true}
    />
  );
}

export default StoresList;
