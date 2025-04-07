const sampleListings = [
  {
    title: "Shimla",
    description:
      "Embark on a journey to Shimla, where the majestic Himalayas meet colonial charm, offering a tranquil escape amidst lush greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3200,
    location: "Shimla",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048],
    },
  },
  {
    title: "Manali",
    description:
      "Discover the adventure capital of India, Manali, where snow-capped peaks, gushing rivers, and vibrant culture converge to mesmerize every traveler.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1556438549-168b3e11c0a1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4400,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1887, 32.2396],
    },
  },
  {
    title: "Kedarnath",
    description:
      "Seek solace amidst the towering peaks of Kedarnath, a sacred pilgrimage site nestled in the Himalayas, resonating with divine tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Uttarakhand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.0669, 30.7342],
    },
  },
  {
    title: "Badrinath",
    description:
      "Surrender to the spiritual aura of Badrinath, a sacred abode amidst the Himalayas, where faith intertwines with nature's magnificence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601821139366-eb14f3628e26?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Uttarakhand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.407, 30.7343],
    },
  },
  {
    title: "Leh-Ladakh",
    description:
      "Embark on an odyssey to Leh-Ladakh, a land of surreal landscapes, ancient monasteries, and rugged terrain, promising an unforgettable adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600159819291-f9069e7d5360?q=80&w=915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Ladakh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526],
    },
  },
  {
    title: "Alleppey",
    description:
      "Drift along the tranquil backwaters of Alleppey, embraced by verdant palm-fringed shores and timeless serenity, for an enchanting escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4850,
    location: "Alleppey",
    country: "India",
    geometry: {
      coordinates: [76.3388, 9.4981],
      type: "Point",
    },
  },
  {
    title: "Darjeeling",
    description:
      "waken your senses amidst the misty hills of Darjeeling, where lush tea gardens, panoramic vistas, and vibrant culture beckon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1637737118663-f1a53ee1d5a7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Darjeeling",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.036],
    },
  },
  {
    title: "Lakshadweep",
    description:
      "Dive into the pristine waters of Lakshadweep, a tropical paradise of coral reefs, azure lagoons, and secluded beaches, offering ultimate bliss.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1572431447238-425af66a273b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 7200,
    location: "Kavaratti",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.6167, 10.5667],
    },
  },
  {
    title: "Goa-Beach",
    description:
      "Surrender to the laid-back vibe of Goa's beaches, where golden sands, azure waters, and vibrant shacks create a haven for relaxation and revelry.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Goa",
    country: "India",
    geometry: {
      coordinates: [73.7573, 15.5413],
      type: "Point",
    },
  },
  {
    title: "Pondicheery",
    description:
      "Lose yourself in the quaint charm of Pondicherry, where French colonial architecture, spiritual sanctuaries, and beachfront bliss await.",
    image: {
      filename: "listingimage",
      url: "https://img.veenaworld.com/wp-content/uploads/2023/03/10-Things-That-Make-Pondicherry-An-Unforgetful-Travel-Destination.jpg",
    },
    price: 3400,
    location: "Pondicherry",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.8145, 11.9139],
    },
  },
  {
    title: "Hawa Mahal",
    description:
      "Marvel at the intricate beauty of Jaipur's iconic Hawa Mahal, a mesmerizing architectural gem adorned with intricately carved windows and vibrant hues.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730373328-26e408d64025?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.8267, 26.9239],
    },
  },
  {
    title: "Lotus Temple",
    description:
      "Find serenity at Delhi's Lotus Temple, a breathtaking architectural marvel and a symbol of unity, peace, and spiritual harmony.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586520748101-a5df6afa76f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "New Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.2588, 28.5535],
    },
  },

  {
    title: "Nandi Hills",
    description:
      "Escape to the scenic vistas of Nandi Hills, a verdant retreat near Bangalore, offering panoramic views, historical ruins, and serene ambiance.",
    image: {
      filename: "listingimage",
      url: "https://t4.ftcdn.net/jpg/02/74/03/97/360_F_274039701_Sm80rnflbopuOMuLJxg1HoMEWwomlC04.jpg",
    },
    price: 3300,
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.6835, 13.3702],
    },
  },
  {
    title: "Chandrabhaga River",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1478382188900-5bb598fe27d3?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },
  {
    title: "Ooty",
    description:
      "Unwind amidst the misty hills of Ooty, a charming hill station adorned with sprawling tea gardens, serene lakes, and cool climate, perfect for rejuvenation.",
    image: {
      filename: "listingimage",
      url: "https://www.desktopbackground.org/download/1366x768/2015/01/30/894931_free-ooty-wallpapers-in-hd-pictures-gallery_1500x996_h.jpg",
    },
    price: 1900,
    location: "Ootacamund",
    country: "India",
    geometry: {
      coordinates: [76.6932, 11.4064],
      type: "Point",
    },
  },
  {
    title: "Varkala",
    description:
      "Surrender to the laid-back allure of Varkala's cliff-top beaches, where golden sands, dramatic cliffs, and pristine waters create a tranquil haven.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1621338316421-c8e1ff8ce0ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Varkala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.71, 8.7306],
    },
  },
  {
    title: "Mussoorie",
    description:
      "Embrace the old-world charm of Mussoorie, a picturesque hill station nestled in the Garhwal Himalayas, offering breathtaking vistas and colonial heritage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1588508149880-3ee043ff1648?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TXVzc29vcmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Mussoorie",
    country: "India",
    geometry: {
      coordinates: [78.0667, 30.4595],
      type: "Point",
    },
  },
  {
    title: "Amarnath",
    description:
      "Embark on a sacred pilgrimage to Amarnath Cave, nestled in the Himalayas, where the divine presence and natural splendor merge into an awe-inspiring experience.",
    image: {
      filename: "listingimage",
      url: "https://5.imimg.com/data5/VE/MH/GLADMIN-64987147/amarnath-cave-tour-package.png",
    },
    price: 1400,
    location: "Jammu and Kashmir",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526],
    },
  },
  {
    title: "Mount Abu",
    description:
      "Retreat to the serene heights of Mount Abu, Rajasthan's only hill station, offering a refreshing escape with its cool climate, lush landscapes, and sacred sites.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504803184203-dd2dba6aa00e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6400,
    location: "Mount Abu",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.7156, 24.5925],
    },
  },
  {
    title: "Taj Mahal",
    description:
      "Marvel at the eternal symbol of love, the Taj Mahal, a breathtaking masterpiece of Mughal architecture, epitomizing beauty, romance, and grandeur.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Agra",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.0421, 27.1751],
    },
  },
  {
    title: "Silicon Valley",
    description:
      "Explore the innovation hub of Silicon Valley, where groundbreaking technology, entrepreneurial spirit, and cultural diversity converge to shape the future.",
    image: {
      filename: "listingimage",
      url: "https://c4.wallpaperflare.com/wallpaper/567/248/1015/skyline-photography-light-trails-los-angeles-wallpaper-preview.jpg",
    },
    price: 21000,
    location: "California",
    country: "United State",
    geometry: {
      coordinates: [122.4194, 37.7749],
      type: "Point",
    },
  },
  {
    title: "Blue City",
    description:
      "Lose yourself in the azure hues of Jodhpur's Blue City, where ancient forts, vibrant streets, and traditional charm create a mesmerizing tapestry.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2950,
    location: "Jodhpur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389],
    },
  },
  {
    title: "India Gate",
    description:
      "Pay homage to India's brave soldiers at the majestic India Gate, a poignant memorial and iconic landmark symbolizing valor, sacrifice, and national pride.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1750,
    location: "New Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.2295, 28.6129],
    },
  },
  {
    title: "Thar Desert",
    description:
      "Embark on an adventure into the mystical realms of the Thar Desert, where vast dunes, camel safaris, and vibrant culture await amidst the golden sands.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3600,
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9086, 26.9162],
    },
  },
  {
    title: "Charminar",
    description:
      "Immerse yourself in the rich heritage of Hyderabad at the iconic Charminar, a splendid monument of Islamic architecture and a symbol of the city's legacy.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551161242-b5af797b7233?q=80&w=851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Hyderabad",
    country: "India",
    geometry: {
      coordinates: [78.4747, 17.3616],
      type: "Point",
    },
  },
  {
    title: "Marina Beach",
    description:
      " Indulge in the vibrant ambiance of Chennai's Marina Beach, where golden sands, crashing waves, and bustling promenades create an enchanting coastal retreat.",
    image: {
      filename: "listingimage",
      url: "https://t3.ftcdn.net/jpg/02/91/10/18/360_F_291101882_DGNc12xGaK3gpEJot07S6gUh07Um2GY5.jpg",
    },
    price: 4000,
    location: "Chennai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [80.2772, 13.0497],
    },
  },
  {
    title: "Vaishno Devi",
    description:
      "Embark on a spiritual odyssey to Vaishno Devi, nestled in the scenic Trikuta Mountains, where devotion and divine blessings await every pilgrim.",
    image: {
      filename: "listingimage",
      url: "https://media.istockphoto.com/id/1295633118/photo/mata-vaishno-devi-shrine.jpg?s=612x612&w=0&k=20&c=9D3R3O9z4rsNsfzAOhsuWxE4m5jCSbRp01vLBx4ioVg=",
    },
    price: 2200,
    location: "Jammu and Kashmir",
    country: "India",
    geometry: {
      coordinates: [74.932, 32.9914],
      type: "Point",
    },
  },
  {
    title: "Golden Temple",
    description:
      "Bask in the divine aura of Amritsar's Golden Temple, a spiritual sanctuary revered by millions, where faith and humanity converge.",
    image: {
      filename: "listingimage",
      url: "https://c4.wallpaperflare.com/wallpaper/823/156/52/temples-harmandir-sahib-amritsar-golden-temple-wallpaper-preview.jpg",
    },
    price: 2200,
    location: "Amritsar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.8765, 31.619],
    },
  },
  {
    title: "Ram Mandir",
    description:
      "Delve into the heart of devotion and history at the revered Ram Mandir, embodying India's spiritual essence.",
    image: {
      filename: "listingimage",
      url: "https://t4.ftcdn.net/jpg/06/53/11/85/360_F_653118566_9395QCHnSYONi4WmxozjhTJKIrHM2Tsa.jpg",
    },
    price: 1500,
    location: "Ayodhya",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [82.1998, 26.7922],
    },
  },
];

module.exports = { data: sampleListings };
