import { StyleSheet, View, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import OrdersSummaryCard from "../components/OrdersSummaryCard/OrdersSummaryCard";
import WalletSummaryCard from "../components/WalletSummaryCard/WalletSummaryCard";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import ProductGrid from "../../products/components/ProductGrid/ProductGrid";
import { getBestSellingProducts } from "../../products/services/products.service";
import HeadLine from "../../../Shared/ui/HeadLine";
import TailorsList from "../../tailors/components/TailorList/TailorList";
import StoresList from "../../stores/components/StoreList/StoreList";
import HomeHeader from "../components/Header/HomeHeader";

function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getBestSellingProducts().then(setProducts);
  }, []);
  return (
    <>
      <HomeHeader />
      <View style={styles.HomeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeBanner />

          {/* Cards Section */}
          <View style={styles.cardsContainer}>
            <OrdersSummaryCard />
            <WalletSummaryCard balance={1463.55} />
          </View>
          <HeadLine>Best Selling</HeadLine>
          <ProductGrid
            products={products}
            onProductPress={(id) =>
              navigation.navigate("ProductDetails", { id })
            }
          />
          <HeadLine>Nearby Tailors</HeadLine>
          <TailorsList />
          <HeadLine>Most Rated stores</HeadLine>
          <StoresList
            onStorePress={(id) => navigation.navigate("StoreDetails", { id })}
          />
        </ScrollView>
      </View>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 35,
  },
  cardsContainer: {
    marginVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
