export const getHomeData = async () => {
  return {
    latestProjects: [
      {
        id: 1,
        title: "Complete design of a white wedding dress",
        image: "https://via.placeholder.com/300",
        tailorName: "Essam Hamdy",
      },
      {
        id: 2,
        title: "Jeans pants hemming",
        image: "https://via.placeholder.com/300",
        tailorName: "Salma Elshobaky",
      },
    ],

    nearbyTailors: [
      {
        id: 1,
        name: "Essam Hamdy",
        rating: 4.5,
        reviewsCount: 214,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Abdo Sameh",
        rating: 4.2,
        reviewsCount: 172,
      },
    ],

    topRatedTailors: [
      {
        id: 3,
        name: "Ameen Shorbagy",
        rating: 4.9,
        reviewsCount: 320,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Adel Awad",
        rating: 4.8,
        reviewsCount: 290,
      },
    ],
  };
};
