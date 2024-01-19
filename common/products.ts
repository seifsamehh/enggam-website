export interface Product {
  id: number;
  name: string;
  price: number;
  delete: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const products: Product[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Free Fire 2200+220 Diamonds Pins",
    price: 19.87,
    delete: "20.20",
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 600 + 60  UC (Global) Code",
    price: 8.85,
    delete: "9.50",
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "MyPrepaidCenter Mastercard 10 USD",
    price: 11.33,
    delete: "12.50",
    image: "/MyPrepaid-Center.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Google Play Gift Card USA 10 USD",
    price: 10.2,
    delete: "11.50",
    image: "/GooglePlay-gift-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "iTunes USA 10$ Gift Card",
    price: 9.99,
    delete: "10.50",
    image: "/iTunes-gift-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Fortnite 1000 V-Bucks Card (United State)",
    price: 28.84,
    delete: "29.90",
    image: "/Fortnite-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL100 Riot Points Gift Card Brazil",
    price: 25.75,
    delete: "27.00",
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "5800RP Riot Points Gift Card Turkey",
    price: 21.1,
    delete: "22.50",
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "1500 diamonds freefire Brazil R$150",
    price: 10.81,
    delete: "11.50",
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 56,000 Diamonds",
    price: 107.12,
    delete: "110.60",
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
