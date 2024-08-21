// pubg
export interface PubgProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}

export const PubgProducts: PubgProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 60 UC (Global) Code",
    price: 0.89,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 300+25 UC (Global) Code",
    price: 4.35,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 600+60 UC (Global) Code",
    price: 8.85,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 1500+300 UC (Global) Code",
    price: 21.90,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 3000+850 UC (Global) Code",
    price: 43.77,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 6000+2100 UC (Global) Code",
    price: 87.55,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 16200 UC (Global) Code",
    price: 175.10,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 24300 UC (Global) Code",
    price: 262.60,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 32400 UC (Global) Code",
    price: 350.20,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "PUBG 40500 UC (Global) Code",
    price: 435.69,
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// uc with id
export interface PubgUCProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const PubgucProducts: PubgUCProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "UC with ID (Global)",
    price: "1.00 - 500.00",
    image: "/pubg-uc.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// mobile lite battlecoin
export interface PubgBattleProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const PubgBattleProducts: PubgBattleProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Mobile Lite Battlecoin",
    price: "1.20 - 685.00",
    image: "/pubg-mobile-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// freefire diamonds
export interface FreefireDiamondProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const FreefireDiamondProducts: FreefireDiamondProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Free Fire 100 + 10 Diamonds Pins (Garena)",
    price: 1.03,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Free Fire 210 + 21 Diamonds Pins (Garena)",
    price: 2.06,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Free Fire 530 + 53 Diamonds Pins (Garena)",
    price: 5.00,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Free Fire 1080 + 108 Diamonds Pins (Garena)",
    price: 9.99,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Free Fire 2200 + 220 Diamonds Pins (Garena)",
    price: 20.30,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// topup with ID
export interface TopupFreefireProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const TopupFreefireProducts: TopupFreefireProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Diamonds Top Up With ID",
    price: "1.15 - 71.00",
    image: "/freefire-topup.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// MAX INDONESIA Vouchers
export interface MaxFreefireProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const MaxFreefireProducts: MaxFreefireProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "MAX INDONESIA Vouchers",
    price: "0.10 - 340.00",
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// MAX Malaysia Vouchers
export interface MaxMalaysiaFreefireProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const MaxMalaysiaFreefireProducts: MaxMalaysiaFreefireProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "MAX Malaysia Vouchers",
    price: "1.10 - 23.10",
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// freefire brazil
export interface FreefireBrazilProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const FreefireBrazilProducts: FreefireBrazilProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "R$30 diamonds freefire Brazil",
    price: 6.48,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "1500 diamonds freefire Brazil R$150",
    price: 10.81,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "5100 diamonds freefire Brazil R$150",
    price: 31.4,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// freefire colombia
export interface FreefireColombiaProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const FreefireColombiaProducts: FreefireColombiaProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "520 diamonds freefire Colombia",
    price: 6.18,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "1060 diamonds freefire Colombia",
    price: 12.35,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "2180 diamonds freefire Colombia",
    price: 24.72,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "5600 diamonds freefire Colombia",
    price: 56.65,
    image: "/freefire-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// roblox
export interface RobloxProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
// europe
export const RobloxEuropeProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€10 Roblox (Europe)",
    price: 11.22,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€15 Roblox (Europe)",
    price: 16.48,
    image: "/Roblox-card.webp",
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
    name: "€25 Roblox (Europe)",
    price: 27.6,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€50 Roblox (Europe)",
    price: 50.79,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€100 Roblox (Europe)",
    price: 113.3,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// uk
export const RobloxUKProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "£10 Roblox (United Kingdom)",
    price: 12.87,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "£20 Roblox (United Kingdom)",
    price: 20.95,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "£50 Roblox (United Kingdom)",
    price: 63.34,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// us
export const RobloxUSProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$10 Roblox (Global)",
    price: 9.68,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$15 Roblox (Global)",
    price: 15.45,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$20 Roblox (Global)",
    price: 20.29,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$25 Roblox (Global)",
    price: 24.2,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$50 Roblox (Global)",
    price: 48.41,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$100 Roblox (Global)",
    price: 97.85,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "$200 Roblox (Global)",
    price: 195.7,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// australia
export const RobloxAustraliaProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 10 Roblox (Australia)",
    price: 7.72,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 25 Roblox (Australia)",
    price: 18.54,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 50 Roblox (Australia)",
    price: 36.56,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 100 Roblox (Australia)",
    price: 73.1,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// brazil
export const RobloxBrazilProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL 25 Roblox (Brazil)",
    price: 5.66,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL 40 Roblox (Brazil)",
    price: 9.1,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL 60 Roblox (Brazil)",
    price: 12.87,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL 100 Roblox (Brazil)",
    price: 21.83,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// Canda
export const RobloxCandaProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "CAD15 Roblox (Canada)",
    price: 11.84,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "CAD25 Roblox (Canada)",
    price: 19.3,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "CAD50 Roblox (Canada)",
    price: 38.6,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "CAD100 Roblox (Canada)",
    price: 76.2,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "CAD150 Roblox (Canada)",
    price: 113.8,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "CAD200 Roblox (Canada)",
    price: 152.13,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// France
export const RobloxFranceProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€10 Roblox (France)",
    price: 11.3,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€20 Roblox (France)",
    price: 22.66,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€50 Roblox (France)",
    price: 52.0,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// Germany
export const RobloxGermanyProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€10 Roblox (Germany)",
    price: 10.6,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€20 Roblox (Germany)",
    price: 20.9,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "€50 Roblox (Germany)",
    price: 51.5,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// Malaysia
export const RobloxMalaysiaProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "RM50 Roblox (Malaysia)",
    price: 11.84,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "RM125 Roblox (Malaysia)",
    price: 29.3,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// Singapore
export const RobloxSingaporeProducts: RobloxProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "SGD30 Roblox (Singapore)",
    price: 25.75,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "SGD75 Roblox (Singapore)",
    price: 59.74,
    image: "/Roblox-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// fortnite
export interface FortniteProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
// us
export const FortniteUSProducts: FortniteProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Fortnite 1000 V-Bucks Card",
    price: 12.35,
    image: "/Fortnite-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Fortnite 2800 V-Bucks Card",
    price: 28.84,
    image: "/Fortnite-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Fortnite 5000 V-Bucks Card",
    price: 44.29,
    image: "/Fortnite-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Fortnite 13500 V-Bucks Card",
    price: 103.0,
    image: "/Fortnite-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// league
export interface LeagueProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
// turkey
export const LeagueTurkeyProducts: LeagueProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "200RP Riot Points Gift Card Turkey",
    price: 1.0,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "850RP Riot Points Gift Card Turkey",
    price: 3.6,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "1600RP Riot Points Gift Card Turkey",
    price: 6.18,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "3150RP Riot Points Gift Card Turkey",
    price: 15.66,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "5800RP Riot Points Gift Card Turkey",
    price: 21.1,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "9200RP Riot Points Gift Card Turkey",
    price: 31.93,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// australia
export const LeagueAustraliaProducts: LeagueProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 10 Riot Points Gift Card Australia",
    price: 8.34,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 25 Riot Points Gift Card Australia",
    price: 20.0,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 50 Riot Points Gift Card Australia",
    price: 39.14,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
// brazil
export const LeagueBrazilProducts: LeagueProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL50 Riot Points Gift Card Brazil",
    price: 12.87,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "BRL100 Riot Points Gift Card Brazil",
    price: 25.75,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "AUD 50 Riot Points Gift Card Australia",
    price: 39.14,
    image: "/league-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// mobile legends
export interface MobileLegendsProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
// BANG BANG Pins “Vouchers”
export const MobileBangProducts: MobileLegendsProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "11 Diamonds-Mobile Legends Global",
    price: 0.22,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "55 Diamonds-Mobile Legends Global",
    price: 1.34,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "275 Diamonds-Mobile Legends Global",
    price: 5.45,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "565 Diamonds-Mobile Legends Global",
    price: 10.5,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "1155 Diamonds-Mobile Legends Global",
    price: 20.6,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "1765 Diamonds-Mobile Legends Global",
    price: 30.9,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "2975 Diamonds-Mobile Legends Global",
    price: 51.5,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "6000 Diamonds-Mobile Legends Global",
    price: 102.48,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "12000 Diamonds-Mobile Legends Global",
    price: 204.97,
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// Diamonds TopUp
export interface MobileDiamondsTopUpProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  // Add other properties as needed
}
export const MobileDiamondsTopUpProducts: MobileDiamondsTopUpProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Diamonds TopUp",
    price: "0.20 - 99.50",
    image: "/mobile-legends-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];

// ludo
export interface LudoProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  // Add other properties as needed
}
// global
export const LudoGlobalProducts: LudoProduct[] = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "(DIST) Yalla Ludo 830 Diamonds",
    price: 2.36,
    image: "/Yalla-ludo-card.webp",
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
    name: "(DIST) Yalla Ludo 13000 Diamonds",
    price: 26.78,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "(DIST) Yalla Ludo 68500 Diamonds",
    price: 2.36,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 25,300,000 Gold",
    price: 107.1,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "(DIST) Yalla Ludo 224500 Gold",
    price: 5.66,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 27,800 Diamonds",
    price: 53.56,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 56,000 Diamonds",
    price: 107.12,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 10,030,000 Gold",
    price: 53.56,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    name: "Yalla Ludo 3,700,000 Gold",
    price: 26.78,
    image: "/Yalla-ludo-card.webp",
    quantity: 0,
    // Add other properties as needed
  },
];
