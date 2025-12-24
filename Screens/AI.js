import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={34} color="#9b1c64" />
        <Text style={styles.headerTitle}>Home</Text>
        <Ionicons name="search" size={26} color="#9b1c64" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerTitle}>Haj Radwan</Text>
            <Text style={styles.bannerSubtitle}>fabrics</Text>

            <TouchableOpacity style={styles.bannerBtn}>
              <Text style={styles.bannerBtnText}>Order Now</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={{ uri: "https://www.pinterest.com/pin/24206916745726013/" }}
            style={styles.bannerImg}
          />
        </View>

        {/* Orders */}
        <View style={styles.ordersRow}>
          <View style={styles.orderCard}>
            <Text style={styles.orderNumber}>2</Text>
            <Text style={styles.orderText}>Orders</Text>
          </View>

          <View style={styles.orderCard}>
            <Text style={styles.orderNumber}>14,835 EGP</Text>
            <Text style={styles.orderText}>Fasally Wallet</Text>
          </View>
        </View>

        {/* Best Selling */}
        <SectionTitle title="Best selling" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard />
          <ProductCard />
        </ScrollView>

        {/* Nearby Tailors */}
        <SectionTitle title="Nearby tailors" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PersonCard name="Essam Hamdy" />
          <PersonCard name="Abdo Sameh" />
        </ScrollView>

        {/* Most Rated Stores */}
        <SectionTitle title="Most rated stores" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <StoreCard name="Qamsha store" />
          <StoreCard name="Diyaa fabrics" />
        </ScrollView>
      </ScrollView>

      {/* Bottom Tabs */}
      <View style={styles.bottomTab}>
        <Ionicons name="home" size={26} color="#9b1c64" />
        <Ionicons name="grid-outline" size={26} color="#999" />
        <Ionicons name="cart-outline" size={26} color="#999" />
        <Ionicons name="person-outline" size={26} color="#999" />
      </View>
    </View>
  );
}

/* ---------------- Components ---------------- */

function SectionTitle({ title }) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}

function ProductCard() {
  return (
    <View style={styles.productCard}>
      <Image
          source={{ uri: "https://www.pinterest.com/pin/5911043261634873/" }}
        style={styles.productImg}
      />
      <Text style={styles.productTitle}>
        Velvet fabric with floral patterns
      </Text>
      <Text style={styles.price}>219 EGP</Text>
    </View>
  );
}

function PersonCard({ name }) {
  return (
    <View style={styles.personCard}>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/1e/9a/68/1e9a685c8857b43c27ee272ea3bcb094.jpg" }}
        style={styles.personImg}
      />
      <Text style={styles.personName}>{name}</Text>
    </View>
  );
}

function StoreCard({ name }) {
  return (
    <View style={styles.storeCard}>
      <Image
        source={{ uri: "https://i.pinimg.com/736x/21/85/43/21854391cdc24326bf3a0b58473d9e53.jpg" }}
        style={styles.storeImg}
      />
      <Text style={styles.storeName}>{name}</Text>
    </View>
  );
}

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },

  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  banner: {
    margin: 16,
    backgroundColor: "#9b1c64",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  bannerSubtitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  bannerBtn: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 6,
  },

  bannerBtnText: {
    color: "#9b1c64",
    fontWeight: "bold",
  },

  bannerImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  ordersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },

  orderCard: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  orderNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9b1c64",
  },

  orderText: {
    color: "#555",
  },

  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  productCard: {
    backgroundColor: "#fff",
    width: 160,
    marginLeft: 16,
    borderRadius: 12,
    padding: 10,
  },

  productImg: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },

  productTitle: {
    fontSize: 13,
    marginTop: 6,
  },

  price: {
    fontWeight: "bold",
    marginTop: 4,
    color: "#9b1c64",
  },

  personCard: {
    backgroundColor: "#fff",
    width: 120,
    marginLeft: 16,
    borderRadius: 12,
    alignItems: "center",
    padding: 10,
  },

  personImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  personName: {
    marginTop: 6,
    fontSize: 13,
  },

  storeCard: {
    backgroundColor: "#fff",
    width: 180,
    marginLeft: 16,
    borderRadius: 12,
    padding: 10,
  },

  storeImg: {
    width: "100%",
    height: 90,
    borderRadius: 10,
  },

  storeName: {
    marginTop: 6,
    fontWeight: "bold",
  },

  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    backgroundColor: "#fff",
  },
});
