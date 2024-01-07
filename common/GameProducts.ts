export interface GameProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const PubgProducts: GameProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Pubg",
    description: "pubg game card",
    price: 10,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
