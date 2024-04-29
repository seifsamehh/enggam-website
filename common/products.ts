export interface Product {
  id: number;
  name: string;
  price: number;
  delete: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const products: Product[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 56,000 Diamonds",
    price: 107.12,
    delete: 110.6,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PSN $30 (KW)",
    price: 30.2,
    delete: 31.2,
    image: "/Psn-gift-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "¥10000 Xbox Live Card Japan (JP)",
    price: 199.9,
    delete: 202.2,
    image: "/xbox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AstroPay Card 10000EGP",
    price: 412,
    delete: 415,
    image: "/AstroPay-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Neosurf Prepaid card 20 AUD",
    price: 16.99,
    delete: 17.5,
    image: "/Neosurf.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "NOON  100SAR (SAUDI ARABIC)",
    price: 29.59,
    delete: 30.3,
    image: "/noon.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "EZPIN GIFT CARD 100$",
    price: 112.4,
    delete: 115.0,
    image: "/ezpin.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Pubg New State 300 NC",
    price: 1.0,
    delete: 1.6,
    image: "/pubg-state.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Jawaker 4250 Token (GLOBAL)",
    price: 1.4,
    delete: 2.3,
    image: "/jawaker.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Garena Shells (VN) 200K",
    price: 10.8,
    delete: 11.6,
    image: "/garena.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
