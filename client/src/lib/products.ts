import aminoImg from "@assets/advanced_amino_realistic_1768700941153_1768800552469.webp";
import collagenImg from "@assets/advanced_collagen_pouch_realistic_1768701522740_1768800552469.webp";
import aizenImg from "@assets/aizen_power_realistic_1768701029586_1768800552469.webp";
import digestImg from "@assets/digestsync_realistic_1768701043011_1768800552469.webp";
import fluxactiveImg from "@assets/fluxactive_realistic_1768701064604_1768800552469.webp";
import glutlessImg from "@assets/glutless_realistic_1768701078360_1768800552469.webp";
import jointImg from "@assets/jointeternal_realistic_1768701092080_1768800552469.webp";
import keraImg from "@assets/kerassentials_realistic_1768701115482_1768800552469.webp";
import leanImg from "@assets/leanbliss_realistic_1768701129558_1768800552469.webp";
import hairImg from "@assets/liposomal_hair_realistic_1768701145502_1768800552470.webp";
import neuroImg from "@assets/neurofortis_bottle_1768800552470.webp";
import pinealImg from "@assets/pineal_guardian_bottle_1768800552470.webp";
import primeImg from "@assets/primebiomeduo_realistic_1768701168658_1768800552470.webp";
import prodentimImg from "@assets/prodentim_bottle_1768800552470.webp";
import steelImg from "@assets/steel_bite_bottle_1768800552470.webp";
import sugarImg from "@assets/sugar_defender_bottle_1768800552470.webp";
import tonicImg from "@assets/tonicgreens_realistic_1768701181303_1768800552470.webp";
import zenImg from "@assets/zencortex_bottle_1768800552470.webp";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "advanced-amino",
    name: "Advanced Amino Formula",
    description: "Complete amino acid profile for optimal muscle recovery and energy.",
    price: 49.95,
    rating: 4.8,
    image: aminoImg,
    category: "Performance",
    badge: "Best Seller"
  },
  {
    id: "advanced-collagen",
    name: "Advanced Collagen Plus",
    description: "Premium collagen peptides for skin elasticity and joint health.",
    price: 59.95,
    rating: 4.9,
    image: collagenImg,
    category: "Beauty",
    badge: "Trending"
  },
  {
    id: "neuro-fortis",
    name: "Neuro Fortis Pro",
    description: "Cognitive health support for memory, focus, and attention.",
    price: 69.00,
    rating: 4.7,
    image: neuroImg,
    category: "Brain Health"
  },
  {
    id: "prodentim",
    name: "ProDentim",
    description: "Advanced oral probiotics for healthy teeth and gums.",
    price: 59.00,
    rating: 4.8,
    image: prodentimImg,
    category: "Oral Health"
  },
  {
    id: "sugar-defender",
    name: "Sugar Defender",
    description: "Blood sugar support formula with natural plant ingredients.",
    price: 69.00,
    rating: 4.9,
    image: sugarImg,
    category: "Health Support",
    badge: "New"
  },
  {
    id: "tonic-greens",
    name: "Tonic Greens",
    description: "Immune support super antioxidants blend for daily vitality.",
    price: 79.00,
    rating: 4.8,
    image: tonicImg,
    category: "Immunity"
  },
  {
    id: "lean-bliss",
    name: "LeanBliss",
    description: "Healthy weight support and blood sugar balance chewables.",
    price: 59.00,
    rating: 4.6,
    image: leanImg,
    category: "Weight Management"
  },
  {
    id: "hair-renewal",
    name: "Hair Renewal",
    description: "Liposomal absorption formula with Anagain Nu for hair growth.",
    price: 49.95,
    rating: 4.7,
    image: hairImg,
    category: "Beauty"
  },
  {
    id: "prime-biome",
    name: "Prime Biome",
    description: "Skin and gut essential probiotics for dermal balance.",
    price: 59.00,
    rating: 4.8,
    image: primeImg,
    category: "Gut Health"
  },
  {
    id: "joint-eternal",
    name: "JointEternal",
    description: "Promotes healthy cartilage and supports joint mobility.",
    price: 49.00,
    rating: 4.7,
    image: jointImg,
    category: "Joint Health"
  },
  {
    id: "zencortex",
    name: "ZenCortex",
    description: "Hearing support drops with deep professional formula.",
    price: 69.00,
    rating: 4.8,
    image: zenImg,
    category: "Sensory Health"
  },
  {
    id: "pineal-guardian",
    name: "Pineal Guardian",
    description: "Support for the pineal gland and spiritual connection.",
    price: 59.00,
    rating: 4.5,
    image: pinealImg,
    category: "Brain Health"
  }
];
