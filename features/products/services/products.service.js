export const getBestSellingProducts = async () => {
  return [
    {
      id: "1",
      name: "Velvet fabric with floral patterns",
      price: 219.99,
      oldPrice: 299.99,
      image: require("../../../assets/ADVs/fabric_img.png"),
      rating: 4.5,
      reviewsCount: 57,
      isFavorite: false,
    },
    {
      id: "2",
      name: "Royal-colored fabrics",
      price: 139.99,
      image: require("../../../assets/ADVs/fabric_img2.png"),
      rating: 4.2,
      reviewsCount: 23,
      isFavorite: true,
    },
    {
      id: "3",
      name: "Royal-colored fabrics",
      price: 139.99,
      image: require("../../../assets/ADVs/fabric_img2.png"),
      rating: 4.2,
      reviewsCount: 23,
      isFavorite: true,
    },
  ];
};
