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
  image: string;
  category: string;
  badge?: string;
  features: string[];
  affiliateUrl: string;
}

export const products: Product[] = [
  {
    id: "advanced-amino",
    name: "Advanced Amino Formula",
    description: "Essential amino acids for peak recovery and physical performance.",
    image: aminoImg,
    category: "Physical Performance",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://advancedaminoformula.puresupphub.com"
  },
  {
    id: "advanced-collagen",
    name: "Advanced Collagen Plus",
    description: "Premium collagen support for skin elasticity and joint mobility.",
    image: collagenImg,
    category: "Skin & Joints",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://advancedcollagen.puresupphub.com"
  },
  {
    id: "aizen-power",
    name: "Aizen Power",
    description: "Natural dominance and vitality formula for men.",
    image: aizenImg,
    category: "Men's Vitality",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://aizenpower.puresupphub.com"
  },
  {
    id: "digestsync",
    name: "DigestSync",
    description: "Advanced digestive support with enzyme-rich formula.",
    image: digestImg,
    category: "General Wellness",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://digestsync.puresupphub.com"
  },
  {
    id: "fluxactive",
    name: "Fluxactive Complete",
    description: "Complete 14-in-1 wellness formula for prostate health.",
    image: fluxactiveImg,
    category: "Men's Vitality",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://fluxactive.puresupphub.com"
  },
  {
    id: "glutless",
    name: "GlutLess",
    description: "Supports healthy blood sugar balance and carb metabolism.",
    image: glutlessImg,
    category: "Blood Sugar",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://glutless.puresupphub.com"
  },
  {
    id: "joint-eternal",
    name: "JointEternal",
    description: "Natural support for joint comfort and health.",
    image: jointImg,
    category: "Physical Performance",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://jointeternal.puresupphub.com"
  },
  {
    id: "kerassentials",
    name: "Kerassentials",
    description: "Doctor-formulated oil for healthy nails and skin defense.",
    image: keraImg,
    category: "Skin, Hair & Nails",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://kerassentials.puresupphub.com"
  },
  {
    id: "leanbliss",
    name: "LeanBliss",
    description: "Natural weight management and craving control.",
    image: leanImg,
    category: "Weight Management",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://leanbliss.puresupphub.com"
  },
  {
    id: "hair-renewal",
    name: "Liposomal Hair Renewal",
    description: "Revitalize hair thickness and scalp health with liposomal tech.",
    image: hairImg,
    category: "Skin, Hair & Nails",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://liposomalhair.puresupphub.com"
  },
  {
    id: "neuro-fortis",
    name: "NeuroFortis",
    description: "Cognitive support for memory strength and mental clarity.",
    image: neuroImg,
    category: "Brain & Hearing",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://neurofortis.puresupphub.com"
  },
  {
    id: "pineal-guardian",
    name: "Pineal Guardian",
    description: "Unlock mental clarity and support memory function.",
    image: pinealImg,
    category: "Brain & Hearing",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://pinealguardian.puresupphub.com"
  },
  {
    id: "primebiome",
    name: "PrimeBiome",
    description: "Dual-action probiotic support for total gut health.",
    image: primeImg,
    category: "General Wellness",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://primebiome.puresupphub.com"
  },
  {
    id: "prodentim",
    name: "ProDentim",
    description: "3.5 Billion probiotic strains for optimal oral health and hygiene.",
    image: prodentimImg,
    category: "Oral Health",
    badge: "Best Seller",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://prodentim.puresupphub.com"
  },
  {
    id: "steel-bite",
    name: "Steel Bite Pro",
    description: "Herbal formula to rebuild dental resilience naturally.",
    image: steelImg,
    category: "Oral Health",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://steelbite.puresupphub.com"
  },
  {
    id: "sugar-defender",
    name: "Sugar Defender",
    description: "All-day energy and blood sugar support helper.",
    image: sugarImg,
    category: "Blood Sugar",
    badge: "Best Seller",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://sugardefender.puresupphub.com"
  },
  {
    id: "tonicgreens",
    name: "TonicGreens",
    description: "6-in-1 immune support blend with essential greens.",
    image: tonicImg,
    category: "General Wellness",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://tonicgreens.puresupphub.com"
  },
  {
    id: "zencortex",
    name: "ZenCortex",
    description: "360-degree hearing support and mental sharpness formula.",
    image: zenImg,
    category: "Brain & Hearing",
    badge: "Trending",
    features: ["FDA Facility", "Natural Ingredients"],
    affiliateUrl: "https://zencortex.puresupphub.com"
  }
];
