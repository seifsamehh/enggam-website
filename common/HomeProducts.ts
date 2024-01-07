import { v4 as uuidv4 } from "uuid";

export interface HomeProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const homeproducts: HomeProduct[] = [
  {
    id: uuidv4(),
    name: "Product 6",
    price: 10,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 7",
    price: 20,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 8",
    price: 30,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 9",
    price: 40,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 9",
    price: 50,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
];
