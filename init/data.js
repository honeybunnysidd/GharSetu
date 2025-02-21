const sampleListings = [
  {
    title: "My Hostel",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "My House",
    description:
      "Enjoy a warm and peaceful home with a cozy ambiance, modern comforts, and a welcoming vibe for relaxation and togetherness.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000000,
    location: "Meerut",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.7064, 28.9845],
    },
  },
  {
    title: "Your Flat",
    description:
      "Experience the charm of Flat in this beautifully restored House. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700000,
    location: "Noida",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.391, 28.5355],
    },
  },
  {
    title: "Your Apartment",
    description:
      "Escape to a apartment house on the Pacific coast of Rajasthan. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rajasthan",
    country: "India",
    geometry: {
      coordinates: [74.2179, 27.0238],
      type: "Point",
    },
  },
  {
    title: "My Flat",
    description:
      "Experience the charm of Flat in this beautifully restored House. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700000,
    location: "Noida",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.391, 28.5355],
    },
  },
];

module.exports = { data: sampleListings };
