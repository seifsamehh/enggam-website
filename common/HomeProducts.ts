export interface HomeProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const homeproducts: HomeProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 600 + 60  UC (Global) Code",
    price: 8.85,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€20 Roblox (Europe)",
    price: 27.6,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "(DIST) Yalla Ludo 2320 Diamonds",
    price: 5.66,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "My PrepaidCenter Mastercard 20 USD",
    price: 21.83,
    image: "/MyPrepaid-Center.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "iTunes USA 70$ Gift Card",
    price: 69.0,
    image: "/iTunes-gift-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
