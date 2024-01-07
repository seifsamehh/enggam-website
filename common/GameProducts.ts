import { v4 as uuidv4 } from "uuid";

export interface GameProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const PubgProducts: GameProduct[] = [
  {
    id: uuidv4(),
    name: "Pubg",
    description: "pubg game card",
    price: 10,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
