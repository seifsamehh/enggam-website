import { v4 as uuidv4 } from "uuid";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const products: Product[] = [
  {
    id: uuidv4(),
    name: "Product 1",
    price: 10,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 2",
    price: 20,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 3",
    price: 30,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 4",
    price: 40,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: uuidv4(),
    name: "Product 5",
    price: 50,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
];
