import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    alignItems: "center",
    paddingVertical: 30,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    resizeMode: "cover",
    marginBottom: 12,
  },

  username: {
    fontSize: 18,
    fontWeight: "700",
    color: "#7A004F",
  },

  sectionHeader: {
    marginHorizontal: 16,
    marginBottom: 8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#F2F2F2",
    marginHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    paddingVertical: 4,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },

  rightText: {
    fontSize: 14,
    fontWeight: "500",
  },

  dashedItem: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#7A004F",
    borderRadius: 10,
    margin: 10,
  },

  dangerText: {
    color: "#E53935",
  },

  primaryButton: {
    backgroundColor: "#7A004F",
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  singleCard: {
    backgroundColor: "#F2F2F2",
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EED6E3",
    justifyContent: "center",
    alignItems: "center",
  },
});
