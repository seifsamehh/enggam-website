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
    name: "Product 6",
    price: 10,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 7",
    price: 20,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 8",
    price: 30,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 9",
    price: 40,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Product 9",
    price: 50,
    image: "/maskable_icon.png",
    quantity: 0,
    // Add other properties as needed
  },
];
