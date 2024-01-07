export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const products: Product[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 1",
    price: 10,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 2",
    price: 20,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 3",
    price: 30,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 4",
    price: 40,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 5",
    price: 50,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
];
